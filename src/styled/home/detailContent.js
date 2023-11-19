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
        margin: 32px 0 0 0;
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
        .carouselRow {
            display: flex;
            flex-direction: row;
            .photoDesc {
                display: flex;
                flex-direction: column;
            }
        }
    }
`
