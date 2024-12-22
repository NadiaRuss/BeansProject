import { Link } from "react-router-dom"
import styles from "./styles.module.css"
// import MobileNav from "../MobileNav"


const ModalOpen = () => {
    return(
        <div className={styles.modal}>
            <nav className={styles.navigation}>
                <Link to="/BeansProject/beans">Beans</Link>
                <Link to="/BeansProject/facts">Facts</Link>
                <Link to="/BeansProject/recipes">Recipes</Link>
                <Link to="/BeansProject/combinations">Combinations</Link>
                <Link to="/BeansProject/history">History</Link>
                <Link to="/BeansProject/about">About</Link>
                <Link to="/BeansProject/rewiew">Rewiew</Link>
            </nav>
        </div>


    )
}
export default ModalOpen