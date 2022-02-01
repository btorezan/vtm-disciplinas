import { Link } from "react-router-dom"
import styles from './NavigationBar.module.css';

function NavigationBar(){
    return (
        <nav>
            <ul>
                <li><Link className={styles.link} to="/">Minhas Disciplinas</Link></li>
                <li><Link className={styles.link} to="/disciplinas">Todas Disciplinas</Link></li>             
            </ul>
        </nav>
    )
}
export default NavigationBar