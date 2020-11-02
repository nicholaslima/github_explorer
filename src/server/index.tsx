

import axios from 'axios';


const conexao = axios.create({
    baseURL: 'https://api.github.com',
})

export default conexao;