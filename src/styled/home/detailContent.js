import styled from 'styled-components';
import { darken } from 'polished';

export const DetailContent = styled.div`
    display: flex;
    width: 100%;
    padding: 16px 128px;
    background-color: #ffffff;
    .detail {
        flex-direction: column;
        display: flex;
        width: 100%;
        border-radius: 20px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        align-items: center;
        justify-content: center;
        padding: 16px;
        p {
            padding: 0 0 4px 0;
            color: #333;
            margin-top: 0px;
            margin-bottom: 8px;
            text-align: center;
        }
        h1 {
            font-size: 24px;
            color: #333;
            margin-top: 0px;
        }
    }
    .detailX {
        background-color: #ffcccc;
        .heartHolder {
            width: 100%;
            display: flex;
            img {
                width: 24px;
            }
        }
        .start {
            justify-content: start;
        }
        .end {
            justify-content: end;
        }
    }
    .detailY {
        background-color: #ededed;
        .psSection {
            color: #b5b5b5;
            margin: 32px 0 16px 0;
        }
        p {
            text-align: start;
        }
        h1 {
            margin: 16px 0 0 0;
        }
    }
    .detailZ {
        background-color: #262626;
        padding: 16px 64px;
        margin: 16px 0 0 0;
        h1, p {
            color: #d9d9d9;
            img {
                width: 32px;
                margin: 32px 8px 0 8px;
            }
        }
        p {
            padding: 0 64px;
        }
        img {
            width: 80%;
            margin: 32px 0 16px 0;
        }
    }
    .detailExtra {
        background-color: #ededed;
        height: 800px;
        .enlarged {
            transform: scale(1.1); 
            transition: transform 0.2s ease;
        }
        .carouselRow {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .hidden {
                opacity: 0;
                transform: translateY(-20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            .appear {
                opacity: 1;
                transform: translateY(0px);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            .photoDesc {
                display: flex;
                padding: 0 32px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                    height: 600px;
                    width: 500px;
                    object-fit: cover;
                    border-radius: 20px;
                }
                h6 {
                    margin: 16px 0;
                    width: 500px;
                    text-align: center;
                    font-size: 16px;
                }
            }
            .clickLeft, .clickRight {
                transition: opacity 0.5s;
            }
        }
    }
`
