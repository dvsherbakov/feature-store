import React from 'react';
import styles from './menu.module.scss'

const Menu3D = () => {
    const idStyle = (id:number) => ({ "--i": id }) as React.CSSProperties;
    return (
        <div className={styles['menu3d']}>
           <ul>
               <li style={idStyle(6)}><a href={'/'}>Home</a></li>
               <li style={idStyle(5)}><a href={'/'}>About</a></li>
               <li style={idStyle(4)}><a href={'/'}>Services</a></li>
               <li style={idStyle(3)}><a href={'/'}>Portfolio</a></li>
               <li style={idStyle(2)}><a href={'/'}>Our Team</a></li>
               <li style={idStyle(1)}><a href={'/'}>Contact</a></li>
           </ul>
        </div>
    );
};

export default Menu3D
