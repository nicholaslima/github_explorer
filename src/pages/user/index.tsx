import React from 'react';
import { Container } from './style';
import { FiChevronLeft ,FiChevronRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

const User:React.FC = () => {
    return(
        <Container>
                <div className="fundo">
                    <header>
                        <div className="divLogo">
                            <div className="logo"></div>
                            <img src={ Logo } alt= "logo"></img>                           
                        </div>
                        <p className="description">
                            <Link to="/">
                                <FiChevronLeft color="##A8A8B3" style={{ marginRight: '12px'}}></FiChevronLeft>
                                voltar
                            </Link>
                        </p>
                    </header>

                    <div className="user">

                            <div className="thumb">

                            </div>
                            <div>
                                <div className="titulo">user/repo</div>
                                <div className="description">descrição do repo</div>
                            </div>
                    </div>

                        <div className="userDetails">
                            <div className="stars">
                                <div className="titulo">
                                    1234
                                </div>
                                <div className="description">
                                    stars
                                </div>
                            </div>
                            <div className="forks">
                                <div className="titulo">
                                    4547
                                </div>
                                <div className="description">
                                    forks
                                </div>

                            </div>
                            <div className="issues">
                                <div className="titulo">
                                    4537
                                </div>
                                <div className="description">
                                    issues
                                </div>
                            </div>
                        </div>

                    </div>

                    <ul>
                        <li>
                            <div>
                                <p className="subtitulo">respositorio 5</p>
                                <div className="description">nicholas lima</div>
                            </div>
                            <Link to="/">
                                <FiChevronRight color="#C9C9D4;" size={ 20 }></FiChevronRight>
                            </Link>
                        </li>

                        <li>
                            <div>
                                <p className="subtitulo">respositorio 5</p>
                                <div className="description">nicholas lima</div>
                            </div>
                            <Link to="/">
                                <FiChevronRight color="#C9C9D4;" size={ 20 }></FiChevronRight>
                            </Link>
                        </li>

                        <li>
                            <div>
                                <p className="subtitulo">respositorio 5</p>
                                <div className="description">nicholas lima</div>
                            </div>
                            <Link to="/">
                                <FiChevronRight color="#C9C9D4;" size={ 20 }></FiChevronRight>
                            </Link>
                        </li>
                    </ul>

        </Container>
    )
}
export default User;