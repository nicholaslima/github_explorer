

import styled from 'styled-components';

export const Container = styled.div`

    color: black;

    header{ 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 42px;
        .description{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

    .user{
        margin-top: 81px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 40px;
        .thumb{
            margin-right: 30px;
        }
        .subtitulo{
            margin-bottom: 12px;
        }
    }

    .userDetails{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 516px;
    }

    .subtitulo{
        color: #3D3D4D;
        font-size: 24px;
        font-weight: bold;
    }

    ul{
        margin-top: 80px;
        li{
            text-decoration: none;
            background-color: #fff;
            border-radius: 5px;
            padding: 28px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            .subtitulo{
                margin-bottom: 8px;
            }
        }
    }

    .titulo{
        color: #3D3D4D;
        font-size: 36px;
        font-weight: bold;
    }

    .description{
        color: #6C6C80;
        font-size: 20px;
    }

    .thumb{
        width: 162px;
        height: 152px;
        border-radius: 50%;
        background-color: #6C6C80;
    }

]
`;