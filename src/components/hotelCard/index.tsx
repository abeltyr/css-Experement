import React from "react"
import Button from "../button"
import { MainCard, LeftCard, RightCard, TopCard, BottomCard } from "./style"
import Image from "gatsby-image"

interface CardData {
  primaryBackgroundColor: string,
  primaryTextColor: string,
  cardBorderRadius: number
  image: any
  title: string
  detail: string
  price: number
  priceDetail: string
  moneyType: string
  reviews: number
  bottomText: string
  buttonFunction: Function
  buttonLoading: boolean
  buttonIcon: string
  buttonColor: string
  buttonText: string
  buttonTextColor: string
  buttonCurve: string
}


const Card = (props: CardData) => {
  return (
    <MainCard
      primaryBackgroundColor={props.primaryBackgroundColor}
      primaryTextColor={props.primaryTextColor}
      cardBorderRadius={props.cardBorderRadius}
    >
      <LeftCard
        cardBorderRadius={props.cardBorderRadius}>
        <Image className="LeftImage"
          fluid={props.image}
          alt={`card image ${props.title}`} />
      </LeftCard>
      <RightCard
        cardBorderRadius={props.cardBorderRadius}>
        <TopCard>
          <p className="DarkText">
            {props.title}
          </p>
          <span className="LightText">
            {props.detail}
          </span>

        </TopCard>
        <BottomCard>
          <div>
            <div className="Left">
              <div className="LeftTop">
                <p className="dolor DarkText">
                  {props.price}
                </p>
                {props.priceDetail &&
                  <span className="LightText">
                    {props.priceDetail}
                  </span>
                }
              </div>
            </div>
            <div className="Right">
              <Button text={props.buttonText || "Button"}
                backgroundColor={props.buttonColor}
                textColor={props.buttonTextColor}
                curve={props.buttonCurve}
                loading={props.buttonLoading}
                icon={props.buttonIcon}
                fullIcon=""
                fontSize={14}
                fontWeight={800}
                iconColor=""
                paddingBottom={1.1}
                paddingTop={1.1}
                paddingLeft={3}
                paddingRight={3}
                iconBackgroundColor=""
                onClick={() => { props.buttonFunction() }} />
            </div>
          </div>

          <div className="Review">
            {props.reviews &&
              <span className="LightText ">
                {props.reviews} reviews
          </span>}
          </div>
          <p className="LightText">
            {props.bottomText}
          </p>

        </BottomCard>
      </RightCard>
    </MainCard>
  )
}


export default Card

