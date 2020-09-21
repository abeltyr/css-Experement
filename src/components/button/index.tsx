import React, { useState, useEffect } from "react"
import { CustomButton } from "./style"

interface ButtonData {
  backgroundColor: string
  textColor: string
  curve: string
  loading: boolean
  text: string
  onClick: Function
  icon: string
  fontSize?: number
  fontWeight?: number
  iconColor: string
  iconBackgroundColor: string
  fullIcon: string;
  paddingBottom: number
  paddingTop: number
  paddingLeft: number
  paddingRight: number
}


const Button = (props: ButtonData) => {
  const [loading, setLoading] = useState(props.loading)
  useEffect(() => {
    setLoading(props.loading)
  }, [props.loading])
  return (
    <CustomButton
      aria-disabled={loading}
      disabled={loading}
      backgroundColor={props.backgroundColor}
      textColor={props.textColor} curve={props.curve}
      loading={loading}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      iconColor={props.iconColor}
      paddingBottom={props.paddingBottom}
      paddingTop={props.paddingTop}
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
      iconBackgroundColor={props.iconBackgroundColor}
      onClick={async () => {
        setLoading(true)
        if (props.onClick) {
          await props.onClick()
          setLoading(false)
        }
      }}>
      <span className="buttonText"  >
        {props.icon &&
          <span className="iconData" >
            {props.icon}
          </span>}
        {props.text}
      </span>
      {props.fullIcon &&
        <div className="fullIconData" >
          {props.fullIcon}
        </div>}
    </CustomButton>
  )
}


export default Button

