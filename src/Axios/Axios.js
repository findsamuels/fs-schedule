import axios from 'axios'

const taskAxios = axios.create({
    baseURL: 'https://fs-schedule.firebaseio.com/'
})

export default taskAxios