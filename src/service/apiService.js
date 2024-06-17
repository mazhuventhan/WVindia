import axios from 'axios';
const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: 'https://mank.dci.in/api/'
})

const userRegister = async (data) => {
    try {
        const response = await instance.post('store',data);
        return response.data;
    } catch (error) {
        return error;
    }
};


const Api = { userRegister};
export default Api;