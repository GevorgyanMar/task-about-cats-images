import React from 'react';
import Categories from '../UI/Categories';
import './Sidebar.css';


const Sidebar = () => {
    return (
        <nav className="task-sidebar">
            <section className="task-sidebar__container">
                <Categories />
            </section>
        </nav>
    );
};

export default Sidebar;


