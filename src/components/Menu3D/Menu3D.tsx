import React, {useMemo} from 'react';
import styles from './menu.module.scss'

const Menu3D = () => {
    const menu = useMemo(() => {
        const idStyle = (id: number) => ({"--i": id}) as React.CSSProperties;
        return (<ul> {[{id: 7, href: '/', caption: 'Home'}, {id: 6, href: '/login', caption: 'Login'}, {
            id: 5,
            href: '/circles',
            caption: 'Circles loader'
        }, {id: 4, href: '/infinity', caption: 'Infinity loader'}, {
            id: 3,
            href: '/awesome',
            caption: 'Awesome checkbox '
        }, {id: 2, href: '/glow', caption: 'Glow checkbox'}, {id: 1, href: '/kbd', caption: 'Keyboard'},].map(item =>
            <li key={item.id.toString()} style={idStyle(item.id)}><a href={item.href}>{item.caption}</a>
            </li>)}</ul>)
    }, [])
    return (<div className={styles['menu3d']}>
            {menu}
        </div>);
};

export default Menu3D
