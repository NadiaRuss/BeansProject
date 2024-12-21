import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const DesktopNav = () => {
    return (
        <nav className={styles.navigation}>
                <Link to="/BeansProject/beans">Beans</Link>
                <Link to="/BeansProject/facts">Facts</Link>
                <Link to="/BeansProject/recipes">Recipes</Link>
                <Link to="/BeansProject/combinations">Combinations</Link>
                <Link to="/BeansProject/history">History</Link>
        </nav>
    )
}

export default DesktopNav;