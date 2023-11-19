import styled from 'styled-components';
import { darken } from 'polished';

export const MainContent = styled.div`
  display: table-row;
  height: 100%;
  .contentCenter{
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: 100%;
    height: 100%;
    .container{
      float: right;
      h1, h2, a {
        color: #f9f9f9;
      }
      h1 {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 1px;
        margin: 0;
      }
      h2 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        letter-spacing: 1px;
        margin-top: -15px;
      }
      a {
        width: 250px;
        background-color: #881111;
        padding: 10px 12px;
        font-size: 15px;
        transition: background 0.3s ease;
        text-align: center;
        &:hover {
          background-color: ${darken(0.05, '#881111')};
        }
      }
    }
  }

  @media (max-width: 860px) {
    .contentCenter {
      width: 100%;
      justify-content: center;
      .container {
        margin: 0 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: 520px) {
    .contentCenter {
      .container {
        h1 {
          font-size: 38px;
        }
        h2 {
          font-size: 28px;
          margin-top: -5px;
        }
      }
    }
  }

  @media (max-width: 350px) {
    .contentCenter {
      .container {
        height: 70%;
        h1 {
          font-size: 30px;
        }
        h2 {
          font-size: 20px;
          margin-top: -5px;
          /* margin-bottom: 35px; */
        }
        a {
          width: 180px;
          font-size: 14px;
        }
      }
    }
  }
`
