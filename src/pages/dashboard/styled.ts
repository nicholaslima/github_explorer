

import styled from 'styled-components';


export const Container = styled.div`
    

    header{
        height: 496px;

        .nameProject{ 
            font-weight: 500;
            font-size: 24px;
            color: #737380;

            padding-top: 42px;
            strong{ 
               font-weight: 600;
               color: #737380;
            }
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

`;