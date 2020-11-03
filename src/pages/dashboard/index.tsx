import React,{useCallback,useEffect,useState} from 'react';
import { FiChevronRight  } from 'react-icons/fi';
import { Container,Thumb ,Error} from './styled';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

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
    full_name: string;
    description: string;
    url: string;
    updated_at: string;
    created_at: string;
    commits_url: string;
    owner: userType,
}

const Dashboard:React.FC = () => {
    const [ userRepo,setUserRepo ] = useState('');
    const [ error,setError ] = useState('');

    const [ repositories,setRepo ] = useState<RepositoryType[]>( () => {
       const listStorage =  localStorage.getItem('@githubExplorer/repositories');

       if(!listStorage){
           return [];
       }

       const lista = JSON.parse(listStorage);

       return lista;

    });

    useEffect(() => {
        const string = JSON.stringify(repositories);
        localStorage.setItem('@githubExplorer/repositories',string);
    },[repositories]);


    
    const searchForRepo = useCallback(async() => {
        const [owner,repo] = userRepo.split('/');
       

        if(!userRepo){
            setError('digite corretamente user/repository');
            fecharMensagem();
            return;
        }

        try{
            const response = await api.get<RepositoryType>(`repos/${owner}/${repo}`)
            console.log(response);
            const existe = repositories.some((item) => {
                return item.name === response.data.name;
            });
                    
            if(existe){
                return;
            }

            const list = [...repositories,response.data];
            setRepo(list);
        }catch(err){
            setError('erro ao buscar esse repositório');
            fecharMensagem();
        }

    },[userRepo,repositories]);

    const CatchInput = useCallback((e)=> {
        const value = e.target.value;
        setUserRepo(value);
    },[]);

    function fecharMensagem(){
        setTimeout(() => {
            setError('');
        },3000);
    }

    return(
        <Container>
            <div className="fundo">

            <header>
                <img src={ Logo } className="logo" alt="logo github explorer"></img>
                <div>
                    <h1>Explore repositórios no Github.</h1>

                    <div className="pesquisa">
                        <input type="text"  placeholder="digite aqui" onChange={ (e) =>  CatchInput(e) } />
                        <button onClick={ searchForRepo }>Pesquisar</button>
                    </div>
                    { error && <Error>{ error }</Error>}
                </div>
            </header>
            </div>

            <ul className="list">
            { repositories.map( repository => (
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

                        <Link to={`user/${repository.full_name}`}>
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