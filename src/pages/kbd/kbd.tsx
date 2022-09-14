import React from 'react'
import { CenterViewContainer } from '../../components'
import { Keyboard } from '../../components/Buttons'

const Kbd = () => {
  return (
    <CenterViewContainer background={'#232323'}>
      <Keyboard
        onKeyPress={s => {
          console.log(`pressed the key ${s}`)
        }}
      />
    </CenterViewContainer>
  )
}

export default Kbd
