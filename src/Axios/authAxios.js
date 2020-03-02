import axios from 'axios'

const authAxios = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:'
})