import React from 'react';
import { FiChevronRight  } from 'react-icons/fi';
import { Container } from './styled';
import { Link } from 'react-router-dom';

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
                    <div className="detalhes">
                        <div>
                            <p className="subtitulo">
                                user1/repo
                            </p>
                            <p className="description">
                                descrição do repo
                            </p>
                        </div>
                        <Link to="/user">
                             <FiChevronRight size={ 20 } color="#C9C9D4"></FiChevronRight>
                        </Link>
                        
                    </div>
                </li>
                
                <li>
                    <div className="thumb"></div>
                    <div className="detalhes">
                        <div>
                            <p className="subtitulo">
                                user1/repo
                            </p>
                            <p className="description">
                                descrição do repo
                            </p>
                        </div>
                        <Link to="/user">
                            <FiChevronRight size={ 20 } color="#C9C9D4"></FiChevronRight>
                        </Link>
                    </div>
                </li>

                <li>
                    <div className="thumb"></div>
                    <div className="detalhes">
                        <div>
                            <p className="subtitulo">
                                user1/repo
                            </p>
                            <p className="description">
                                descrição do repo
                            </p>
                        </div>
                        <Link to="/user">
                             <FiChevronRight size={ 20 } color="#C9C9D4"></FiChevronRight>
                        </Link>
                    </div>
                </li>
  
            </ul>
        </Container>
    )
}

export default Dashboard;