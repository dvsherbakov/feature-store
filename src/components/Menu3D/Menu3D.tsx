import React, { useMemo } from 'react'
import { idStyle } from '../common'
import styles from './menu.module.scss'

const Menu3D = () => {
  const menu = useMemo(() => {
    return (
      <ul>
        {' '}
        {[
          { id: 9, href: '/', caption: 'Home' },
          { id: 8, href: '/cubes', caption: 'Cubes' },
          { id: 7, href: '/login', caption: 'Login' },
          { id: 6, href: '/circles', caption: 'Circles loader' },
          { id: 5, href: '/infinity', caption: 'Infinity loader' },
          { id: 4, href: '/awesome', caption: 'Awesome checkbox ' },
          { id: 3, href: '/glow', caption: 'Glow checkbox' },
          { id: 2, href: '/kbd', caption: 'Keyboard' },
          { id: 1, href: '/clock', caption: 'Clock' },
        ].map(item => (
          <li key={item.id.toString()} style={idStyle(item.id)}>
            <a href={item.href}>{item.caption}</a>
          </li>
        ))}
      </ul>
    )
  }, [])
  return <div className={styles['menu3d']}>{menu}</div>
}

export default Menu3D
