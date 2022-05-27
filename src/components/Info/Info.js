import React from 'react';
import classes from './Info.module.css'

const Info = () => {
    return (
        <div className={classes.Info}>
            <h3>Salavat Murzabulatov</h3>
            <ul>
                <li><a href="https://github.com/Murzabulatov" target="_blank"><i className="fa-brands fa-github"/></a></li>
                <li><a href="https://instagram.com/S4LAV4T" target="_blank"><i className="fa-brands fa-instagram"/></a></li>
                <li><a href="https://vk.com/dooster" target="_blank"><i className="fa-brands fa-vk"/></a></li>
            </ul>
            <p className={classes.date}>{new Date().getFullYear()}</p>
        </div>
    )
}

export default Info