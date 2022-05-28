import axios from "axios"

const Api = axios.create({
    baseURL: "https://svg-app.qriarlabs.demo:9343"
});

export default Api