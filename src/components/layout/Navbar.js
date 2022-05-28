import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo-qriar.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <img src={logo} alt="Qriar" />
            </Container>
        </nav>
    )
}

export default Navbar