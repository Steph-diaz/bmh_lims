import React, { useState } from 'react'
import { Logo } from 'icons'
import { LogoContainer, NameText } from './Styles'

const CombinedLogo = ({height, width}) => {
    const [containerWidth, setWidth] = useState(0)
    return (
    <LogoContainer height={height} width={width} ref={el => {
        if (el) {
            setWidth(el.getBoundingClientRect().width)
        }
    }}>
        <Logo fill='#00AAB2' height='100%' width='100%' />
        <NameText width={containerWidth / 6}>BMH LIMS</NameText>
    </LogoContainer>
)}

export default CombinedLogo
