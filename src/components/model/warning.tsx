import React from "react"
import Button from "../button"
import { Container, BasicModel } from "./style"

interface WarningData {
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

const warningData = [1, 2, 3]
const Warning = (props) => {
    return (
        <Container model={warningData}>
            {/* {warningData.map((data, index) => {
                console.log("data", data);
                let removed = false;
                <BasicModel removed={removed} key={index} >
                    Text
                     <button>x</button>
                </BasicModel>
            })} */}
            <BasicModel />
        </Container>
    )
}


export default Warning;

