import React,{useCallback,useEffect,useState} from 'react';
import { FiChevronRight  } from 'react-icons/fi';
import { Container,Thumb } from './styled';
import { Link } from 'react-router-dom';
import api from '../../server';

interface userType {
    login: string,
    id: number;
    avatar_url: string;
}

interface RepositoryType{
    id: number;
    language: string;
    name: string;
    description: string;
    url: string;
    updated_at: string;
    created_at: string;
    commits_url: string;
    owner: userType,
}

const Dashboard:React.FC = () => {
    const [ userRepo,setUserRepo ] = useState('');
    const [ respositories,setRepo ] = useState<RepositoryType[]>([]);

    useEffect(() => {
        console.log(respositories);
    },[respositories]);
    
    const searchForRepo = useCallback(() => {
        const [owner,repo] = userRepo.split('/');

        api.get(`https://api.github.com/repos/${owner}/${repo}`)
            .then(response => {
                const { id,name,language,owner,description,url,updated_at,created_at,commits_url } = response.data;
                console.log(response.data);

                const repo = {
                    id,
                    language,
                    name,
                    description,
                    url,
                    owner,
                    updated_at,
                    created_at,
                    commits_url,
                }
            
                const existe = respositories.some((item) => {
                    return item.name === repo.name;
                });
                
                if(existe){
                    return;
                }
                const list =  [...respositories,repo];
                setRepo(list);
            });

    },[userRepo,respositories]);

    const CatchInput = useCallback((e)=> {
        const value = e.target.value;
        setUserRepo(value);
    },[]);


    return(
        <Container>
            <div className="fundo">

            <header>
                <p className="nameProject"><strong>github</strong>_explorer</p>
                <div>
                    <h1>Explore repositórios no Github.</h1>

                    <div className="pesquisa">
                        <input type="text"  placeholder="digite aqui" onChange={ (e) =>  CatchInput(e) } />
                        <button onClick={ searchForRepo }>Pesquisar</button>
                    </div>
                </div>
            </header>
            </div>

            <ul className="list">
            { respositories.map( repository => (
                <li key={ repository.id }>
                    <Thumb url={ repository.owner.avatar_url } className="thumb"></Thumb>
                    <div className="detalhes">
                        <div>
                            <p className="subtitulo">
                                { repository.name }
                            </p>
                            <p className="description">
                                { repository.description === null ? 'sem descrição' : repository.description }
                            </p>
                        </div>

                        <Link to="/user">
                             <FiChevronRight size={ 20 } color="#C9C9D4"></FiChevronRight>
                        </Link>
                        
                    </div>
                </li>  
            ))}

            </ul>
        </Container>
    )
}

export default Dashboard;