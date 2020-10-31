import React from 'react';
import { FiArrowRight  } from 'react-icons/fi';
import { Container } from './styled';

const Dashboard:React.FC = () => {
    return(
        <Container>
            <div className="fundo">
            <header>
                <p className="nameProject"><strong>github</strong>_explorer</p>
                <div>
                    <h1>Explore repositórios no Github.</h1>

                    <div className="pesquisa">
                        <input type="text" placeholder="digite aqui"/>
                        <button>Pesquisar</button>
                    </div>
                </div>
            </header>
            </div>
            <ul className="list">
                <li>
                    <div className="thumb"></div>
                    <div>
                        <div className="">
                            <p className="subtitulo">
                                user1/repo
                            </p>
                            <p className="description">
                                descrição do repo
                            </p>
                        </div>
                        <FiArrowRight size={ 20 }></FiArrowRight>
                    </div>
                </li>
                
                <li>
                    <div className="thumb"></div>
                    <div>
                        <div className="">
                            <p className="subtitulo">
                                user1/repo
                            </p>
                            <p className="description">
                                descrição do repo
                            </p>
                        </div>
                        <FiArrowRight size={ 20 }></FiArrowRight>
                    </div>
                </li>

                <li>
                    <div className="thumb"></div>
                    <div>
                        <div className="">
                            <p className="subtitulo">
                                user1/repo
                            </p>
                            <p className="description">
                                descrição do repo
                            </p>
                        </div>
                        <FiArrowRight size={ 20 }></FiArrowRight>
                    </div>
                </li>
            </ul>
        </Container>
    )
}

export default Dashboard;