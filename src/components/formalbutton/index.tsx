import React from "react"
import { CustomButton } from "./style"

interface ButtonData {
  backgroundColor: string
  textColor: string
  curve: string
  loading: boolean
  text: string
  onClick: Function
  icon: string
}


const Button = (props: ButtonData) => {
  return (
    <CustomButton
      aria-disabled={props.loading}
      disabled={props.loading}
      backgroundColor={props.backgroundColor}
      textColor={props.textColor} curve={props.curve}
      loading={props.loading}
      onClick={() => {
        if (props.onClick) props.onClick()
      }}>
      {props.icon}
      {props.text}

    </CustomButton>
  )
}


export default Button

