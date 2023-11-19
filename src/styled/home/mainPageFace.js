import styled from 'styled-components';
import { darken } from 'polished';

export const MainPageFace = styled.div`
  width: 100%;
  height: 960px;
  display: table;
  background: url(${props => props.background});
  background-color: #121212;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  .header {
    height: 60px;
    display: table-row;
    ul {
      height: 60px;
      display: flex;
      align-items: center;
      float: right;
      margin-right: 30px;
      li {
        list-style: none;
        display: inline-block;
        margin-right: 35px;
        a {
          font-family: 'Montserrat';
          font-weight: 300;
          font-size: 16px;
          letter-spacing: 0.5px;
          color: white;
          transition: all 0.3s ease;
          &:hover {
            color: ${darken(0.2, '#f9f9f9')};
          }
        }
        span {
          padding: 5px 15px;
          border: 1px solid #f9f9f9;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: linear-gradient(to right, #f2f2f2 50%, transparent 50%);
          background-size: 200% 100%;
          background-position: right bottom;
          &:hover{
            background-position: left bottom;
          }
          &:hover a {
            color: black;
          }
        }
      }
    }
    svg {
      display: none;
      float: right;
      color: #f9f9f9;
      margin: 25px 25px 0 0;
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 860px) {
    .header {
      ul {
        display: none;
      }
      svg {
        display: block;
      }
    }
  }
`
