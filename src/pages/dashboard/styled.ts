

import styled from 'styled-components';


export const Container = styled.div`
    

    header{
        height: 496px;

        .logo{ 
            padding-top: 42px;
        }


        h1{ 
           margin-top: 102px;
           font-size: 48px;
           font-weight: 700;
           width: 433px;
        }

        .pesquisa{ 
           margin-top: 40px;
           border-radius: 5px;
           background-color: #fff;
           width: 714px;
           
           display: flex;
           justify-content: row;

           input{
              width: 100%;
              color: #A8A8B3;
              padding: 20px;
              font-size: 20px;
              border-width: 0;
           }

           button{
               color: #fff;
               background: #04D361;
               border-radius: 0 5px 5px 0;
               border-width: 0;
               width: 210px;
               font-size: 18px;
               font-weight: bold;
           }
        }
    }

    .list{
        width: 714px;
         li{
            background-color: #fff;
            border-radius: 5px;
            border-width: 0;
            text-decoration: none;
            display: flex;
            flex-direction: row;
            padding: 14px;
            margin-top: 16px;
            transition: 0.5s;
            &:hover{
                transform: translateX(20px);
                
            }
            

            .detalhes{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;

            }
         }
    }

    .subtitulo{
        margin-bottom: 4px;
        color: #3D3D4D;
        font-size: 24px;
        font-weight: bold;
    }

    .description{
        color: #A8A8B3;
        font-size: 16px;
        
    }

    .thumb{
        border-radius: 50%;
        width: 64px;
        background-color: #C9C9D4;
        margin-right: 22px;
    }

`;

interface ThumbProps{
    url: string;
}

export const Thumb = styled.div<ThumbProps>`
    background-image: url(${props => props.url});
    background-size: contain;
    background-repeat: no-repeat;
`;


export const  Error = styled.div` 
    color: white;
    margin-top: 15px;
    border-radius: 5px;
    background-color: #e01e37;
    padding: 16px;
    width: 714px;
`