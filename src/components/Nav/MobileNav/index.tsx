import React, { useState } from "react";
import ModalOpen from '../ModalOpen';
import styles from './style.module.css';


const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.currentTarget; // текущий элемент, на котором висит обработчик события
        const firstChild = target.firstElementChild as HTMLElement | null;

        if (firstChild) { // Проверка на null
            firstChild.classList.toggle("animate"); 
        }

        setIsOpen((prev) => !prev); // Используем предыдущий стейт для обновления
    };
    
    return (
        <>
        <div className={styles.burger_menu} onClick={handleClick}>
            <div className={styles.bar}>
            </div>
        </div>
        {isOpen && <ModalOpen />}
        </>
    );
}
export default MobileNav;