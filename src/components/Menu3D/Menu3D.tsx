import React, {useMemo} from 'react';
import styles from './menu.module.scss'

const Menu3D = () => {
    const menu = useMemo(()=>{
        const idStyle = (id:number) => ({ "--i": id }) as React.CSSProperties;
        return (<ul> {[
            {id:6, href:'/', caption:'Home'},
            {id:5, href:'/', caption:'About'},
            {id:4, href:'/', caption:'Services'},
            {id:3, href:'/', caption:'Portfolio'},
            {id:2, href:'/', caption:'Our Team'},
            {id:1, href:'/', caption:'Contact'},
        ].map(item=><li style={idStyle(item.id)}><a href={item.href}>{item.caption}</a></li>)}</ul>)
    }, [])
    return (
        <div className={styles['menu3d']}>
            {menu}
        </div>
    );
};

export default Menu3D
