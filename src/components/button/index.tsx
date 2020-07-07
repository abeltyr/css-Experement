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
  fontSize: string
  fontWeight: string
  iconColor: string
  iconBackgroundColor: string
  fullIcon: string;
}


const Button = (props: ButtonData) => {
  return (
    <CustomButton
      aria-disabled={props.loading}
      disabled={props.loading}
      backgroundColor={props.backgroundColor}
      textColor={props.textColor} curve={props.curve}
      loading={props.loading}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      iconColor={props.iconColor}
      iconBackgroundColor={props.iconBackgroundColor}
      onClick={() => {
        if (props.onClick) props.onClick()
      }}>
      <span className="buttonText"  >
        {props.icon &&
          <span className="iconData" >
            {props.icon}
          </span>}
        {props.text}
      </span>
      {props.fullIcon &&
        <span className="fullIconData" >
          {props.fullIcon}
        </span>}
    </CustomButton>
  )
}


export default Button

