import React,{ useEffect, useState } from 'react';
import { Container,Thumb } from './style';
import { FiChevronLeft ,FiChevronRight} from 'react-icons/fi';
import { Link,useRouteMatch } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';

import api from '../../server';


interface paramsType {
    repository: string;
}


interface RepositoryType{
    id: number;
    language: string;
    name: string;
    full_name: string;
    description: string;
    url: string;
    updated_at: string;
    created_at: string;
    commits_url: string;
    forks: number;
    owner: {
        avatar_url: any;
    }
    open_issues: number;
    stargazers_count: number;
}

interface IssueType{
    id: number;
    title: string;
    user: {
        login: string;
    }
}

const User:React.FC = () => {
    const { params } =  useRouteMatch<paramsType>();
    const [ repository,setRepository ] = useState<RepositoryType | null>(null);
    const [ issues,setIssues ] = useState<IssueType[]>([]);

    useEffect(() => {
        api.get<RepositoryType>(`repos/${params.repository}`)
            .then(response => {
                console.log(response.data);
                setRepository(response.data);
            });
        
        api.get(`repos/${params.repository}/issues`)
            .then(response => {
                setIssues(response.data);
            });

    },[params.repository]);

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
                            <Thumb url={ repository?.owner.avatar_url }></Thumb>
                            <div>
                                <div className="titulo">{ repository?.full_name }</div>
                                <div className="description">{ repository?.description }</div>
                            </div>
                    </div>

                        <div className="userDetails">
                            <div className="stars">
                                <div className="titulo">
                                    { repository?.stargazers_count }
                                </div>
                                <div className="description">
                                    stars
                                </div>
                            </div>
                            <div className="forks">
                                <div className="titulo">
                                    { repository?.forks }
                                </div>
                                <div className="description">
                                    forks
                                </div>

                            </div>
                            <div className="issues">
                                <div className="titulo">
                                    { repository?.stargazers_count }
                                </div>
                                <div className="description">
                                    issues
                                </div>
                            </div>
                        </div>

                    </div>

                    <ul>
                        { issues.map( issue => (
                            <li key={ issue.id }>
                                <div>
                                    <p className="subtitulo">{ issue.title }</p>
                                    <div className="description">{ issue.user.login }</div>
                                </div>
                                <Link to="/">
                                    <FiChevronRight color="#C9C9D4;" size={ 20 }></FiChevronRight>
                                </Link>
                            </li>
                        ))}
                    </ul>

        </Container>
    )
}
export default User;