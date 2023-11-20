import Head from 'next/head'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { MainContent } from "~/styled/home/mainContent"
import { DetailsPageFace } from '~/styled/home/detailsPageFace'
import { ChangeY } from "~/actions/indexActions"
import { MainPageFace } from '~/styled/home/mainPageFace'
import { DetailContent } from '~/styled/home/detailContent'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

function Home() {
  const pageYOffset = useSelector(state => state.pageYOffset)
  const dispatch = useDispatch()

  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState({
    "url": "",
    "description": "",
    "subDescription": ""
  });

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

    document.querySelector(".clickLeft").style.opacity = '0'

    const fetchPhotos = async () => {
      try {
        const response = await fetch('/photos.json');
        const data = await response.json();
        setPhotos(data);
        setCurrentPhoto(data[0])
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [])

  function animatePhoto() {
    const container = document.querySelector(".photoDesc")
    container.classList.remove('appear')
    container.classList.add('hidden')
    setTimeout(function() {
      container.classList.add('appear');
    }, 500);
    setTimeout(function() {
      container.classList.remove('hidden');
    }, 500);
  }

  function photoR() {
    const buttonRight = document.querySelector(".clickRight")

    buttonRight.classList.add('enlarged')
    setTimeout(function() {
      buttonRight.classList.remove('enlarged')
    }, 200); 

    let goalIndex = photos.indexOf(currentPhoto) + 1
    let goalPhoto = photos[goalIndex]
    if (goalPhoto != null) {
      animatePhoto()
      if (goalIndex == photos.length - 1) {
        buttonRight.style.opacity = '0';
      }
      setTimeout(function() {
        setCurrentPhoto(goalPhoto)
      }, 300);
    }

    const buttonLeft = document.querySelector(".clickLeft")
    buttonLeft.style.opacity = '1';
  }

  function photoL() {
    const buttonLeft = document.querySelector(".clickLeft")
    buttonLeft.classList.add('enlarged')
    setTimeout(function() {
      buttonLeft.classList.remove('enlarged')
    }, 200); 
    
    let goalIndex = photos.indexOf(currentPhoto) - 1
    let goalPhoto = photos[goalIndex]
    if (goalPhoto != null) {
      animatePhoto()
      if (goalIndex == 0) {
        buttonLeft.style.opacity = '0';
      }
      setTimeout(function() {
        setCurrentPhoto(goalPhoto)
      }, 300);
    }

    const buttonRight = document.querySelector(".clickRight")
    buttonRight.style.opacity = '1';
  }

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
            <div className="contentCenter">
              <div className="container">
                <h1>Eduardo & Thalyta</h1>
                <h2>1 Ano - 20/11/2023</h2>
              </div>
            </div>
          </MainContent>
        </MainPageFace>
        <DetailsPageFace>
          <DetailContent>
            <div className="detail detailX">
              <div className="heartHolder start">
                <img src="/love.ico" alt="corazaum" />
              </div>
              <h1>Você sabia ?</h1>
              <p>Eduardo e Thalyta compartilham o mesmo neurônio, apesar de ele ser Geminiano e ela Leonina</p>
              <div className="heartHolder end">
                <img src="/love.ico" alt="corazaum" />
              </div>
            </div>
          </DetailContent>
          <DetailContent>
            <div className="detail detailY">
              <h1>De: Seu copinho | Para: Minha pixuruca</h1>
              <p>
                <br></br>&#160;&#160;&#160;&#160;&#160;&#160;Xuxu, queria expressar aqui nessa simples página o quão especial você é para mim. Eu sei que é um algo bem simples e besta, mas é o meu jeitinho de externalizar o valor que você tem na minha vida.
                É sério, eu fico imensamente feliz por completar um ano juntinho de ti, compartilhar experiências, rolês gastronômicos, compartilhar piadas ruins, poder brincar até com as desgraças, enfim kk
                se deixar eu fico aqui o dia inteirinho falando um monte de coisa e de como a gente consegue ser a companhia perfeita um pro outro. <br></br><br></br>
                &#160;&#160;&#160;&#160;&#160;&#160;No fim das contas eu me sinto sortudo e muito feliz de poder compartilhar contigo tanta coisa incrível, realmente você foi uma surpresa enorme na minha vida, e continua sendo, minha bebê.
                Além de tudo, é bom demais poder te chamar de minha amiga, minha companheira, poder estar contigo em cada desafio e até mesmo cada agústia, porque até nesses momentso sei que um temos um ao outro do lado para dar força. Que possamos colecionar mais momentos, mais aventuras, 
                mais restaurantes, mais shows, mais filmes, séries, novelas (dois idosos kk), mais momentos de riso e tentativas culinárias em casa, mais cosquinhas, mais de tudo isso que faz o nosso relacionamento tão especial. <br></br><br></br>
                &#160;&#160;&#160;&#160;&#160;&#160;É só o primeiro ano, mas eu acredito que muitos virão, e também acredito que eles serão mais incríveis ainda, te amo demais princesa, coisinha mais cheirosa desse mundo.
              </p>
              <p className='psSection'>
                Ps: Não julgue meus erros ortográficos por favor!
              </p>
            </div>
          </DetailContent>
          <DetailContent>
            <div className="detail detailZ">
              <h1><img src="/witch-hat.png"/>Você sabia ?<img src="/witch-hat.png"/></h1>
              <p>Eduardo e Thalyta têm uma gatinha chamada Ravena, de quase 6 meses - contando da data de hoje, 20 de Novembro de 2023 - ela adora amassar pãozinho durante a noite e 
                é uma grande apreciadora de Churu, além de odiar que fechem a porta do quarto (ela irá miar impetuosamente até que alguém abra a porta)</p>
              <img src="/ravenola.png" alt="Raveninha" />
            </div>
          </DetailContent>
          <DetailContent>
            <div className="detail detailExtra">
              <h1>Momentos de Edulyta</h1>
              <div className='carouselRow'>
                <BsArrowLeft size={32} className='clickLeft' onClick={photoL}/> 
                <div className='photoDesc'>
                  <img src={currentPhoto.url}/>
                  <h6>{currentPhoto.description}</h6>
                  <p>{currentPhoto.subDescription}</p>
                </div>
                <BsArrowRight size={32} className='clickRight' onClick={photoR}/>
              </div>
            </div>
          </DetailContent>
          <DetailContent>
            <div className="detail detailX">
              <div className="heartHolder start">
                <img src="/love.ico" alt="corazaum" />
              </div>
              <h1>Você sabia ?</h1>
              <p>Eduardo e Thalyta têm seus últimos nomes sendo "Santos", uma grandisíssima coincidência!</p>
              <div className="heartHolder end">
                <img src="/love.ico" alt="corazaum" />
              </div>
            </div>
          </DetailContent>
        </DetailsPageFace>
      </main>
    </motion.div>
  )
}

export default (Home);
