import axios from 'axios'

import { CONTENT_TYPE } from './httpClient.const'

axios.defaults.headers.post['Content-Type'] = CONTENT_TYPE

const httpClient = axios.create({
    baseURL: 'http://localhost:8000', //Poderia ser uma variável de ambiente
    headers: {
        crossDomain: true,
    },
})

export { httpClient }
