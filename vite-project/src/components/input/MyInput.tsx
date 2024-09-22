import { Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface MyInputProps {
    type: string
    placeholder: string
    variant: string
    leftAddon?: string | ReactNode
    rightAddon?: string | ReactNode
}

const MyInput:React.FC<MyInputProps> = ({type, placeholder, variant, leftAddon, rightAddon}) => {
  return (
    <InputGroup>
        {leftAddon && <InputLeftAddon children={leftAddon}/>}
        <Input {...{type, placeholder, variant}} />
        {rightAddon && <InputRightAddon children={rightAddon}/>}
    </InputGroup>
  )
}

export default MyInput;