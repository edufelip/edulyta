import Head from 'next/head'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import {MainPageFace, MainContent, ProjectsSection, Project, AboutSection, ContactSection, MobileMenu} from "~/styled/home"
import { useRouter } from 'next/router'
import { ChangeY } from "~/actions/indexActions"


function Home(props) {
  let router = useRouter()

  const pageYOffset = useSelector(state => state.pageYOffset)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scroll({
      top: pageYOffset
    })
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const href = event.target.href.split('#', 2)[1]
        const element = document.getElementById(href)
        window.scroll({
          behavior: "smooth",
          top: href === "about" ? element.offsetTop - 150 : element.offsetTop
        })
      })
    })
    document.querySelectorAll('.projectAnchor').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        dispatch(ChangeY(window.pageYOffset))
      })
    })
  }, [])

  return (
    <motion.div 
      exit={{opacity: 0}} 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <Head>
        <title>Edulyta</title>
        <link rel="icon" href="/love.ico" />
      </Head>
      <main>
        <MainPageFace background="/background.svg">
          <MainContent>
            <div className="contentLeft">
              <div className="container">
                <h1>Eduardo & Thalyta</h1>
                <h2>1 Ano - 20/11/2023</h2>
              </div>
            </div>
          </MainContent>
        </MainPageFace>
      </main>
    </motion.div>
  )
}

export default (Home);
