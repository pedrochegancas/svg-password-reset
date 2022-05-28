import axios from 'axios'
import styles from './Home.module.css'
//import { useEffect } from 'react'
//import axios from 'axios'


function Home() {

    //const [token, setToken] = useState([])
    axios.get('https://svg-app.qriarlabs.demo:9343/igi/v2/security/login', {
        headers:{
            'realm': 'Admin',
            'Authorization': 'Basic YWRtaW46YWRtaW4=',
        },
    }).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
    
    



    return (
        <section className={styles.home_container}>
            <h1><span>Qriar Demo Initial Password Reset</span></h1>
            <div>
                <p>Teste</p>
            </div>
        </section>
    )
}

export default Home