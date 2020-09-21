import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Card from "../../components/hotelCard"
import Warning from "../../components/model/warning"
import { MainContainer } from "./style"
import { useStaticQuery, graphql } from "gatsby"
const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage : file(relativePath: { eq: "background.png" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo : file(relativePath: { eq: "logo.png" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MainContainer>
      <Warning />
      <Header />
      <Card
        primaryBackgroundColor="#F2F5F7"
        primaryTextColor="#212121"
        image={data.backgroundImage && data.backgroundImage.sharp.fluid}
        title="Amsterdam Walking Tour"
        detail="Explore popular tourist destination as well as hidden local favorites"
        price={17}
        priceDetail="per person *"
        moneyType="birr"
        reviews={28}
        bottomText="*Prices may vary depending on selected date."
        cardBorderRadius={15}
        buttonFunction={async () => {
          await setTimeout(() => {
            alert("hi")
          }, 5000)
        }}
        buttonLoading={false}
        buttonIcon=""
        buttonColor="#4761CC"
        buttonText="Book now"
        buttonTextColor="#fff"
        buttonCurve="8px"
      />
      <Card
        primaryBackgroundColor="#F2F5F7"
        primaryTextColor="#212121"
        image={data.backgroundImage && data.backgroundImage.sharp.fluid}
        title="Amsterdam Walking Tour"
        detail="Explore popular tourist destination as well as hidden local favorites"
        price={17}
        priceDetail="per person *"
        moneyType="birr"
        reviews={28}
        bottomText="*Prices may vary depending on selected date."
        cardBorderRadius={15}
        buttonFunction={() => { alert("hi") }}
        buttonLoading={false}
        buttonIcon=""
        buttonColor="#4761CC"
        buttonText="Book now"
        buttonTextColor="#fff"
        buttonCurve="8px"
      />
      <Card
        primaryBackgroundColor="#F2F5F7"
        primaryTextColor="#212121"
        image={data.backgroundImage && data.backgroundImage.sharp.fluid}
        title="Amsterdam Walking Tour"
        detail="Explore popular tourist destination as well as hidden local favorites"
        price={17}
        priceDetail="per person *"
        moneyType="birr"
        reviews={28}
        bottomText="*Prices may vary depending on selected date."
        cardBorderRadius={15}
        buttonFunction={() => { alert("hi") }}
        buttonLoading={false}
        buttonIcon=""
        buttonColor="#4761CC"
        buttonText="Book now"
        buttonTextColor="#fff"
        buttonCurve="8px"
      />
      <Card
        primaryBackgroundColor="#F2F5F7"
        primaryTextColor="#212121"
        image={data.backgroundImage && data.backgroundImage.sharp.fluid}
        title="Amsterdam Walking Tour"
        detail="Explore popular tourist destination as well as hidden local favorites"
        price={17}
        priceDetail="per person *"
        moneyType="birr"
        reviews={28}
        bottomText="*Prices may vary depending on selected date."
        cardBorderRadius={15}
        buttonFunction={() => { alert("hi") }}
        buttonLoading={false}
        buttonIcon=""
        buttonColor="#4761CC"
        buttonText="Book now"
        buttonTextColor="#fff"
        buttonCurve="8px"
      />
      <Card
        primaryBackgroundColor="#F2F5F7"
        primaryTextColor="#212121"
        image={data.backgroundImage && data.backgroundImage.sharp.fluid}
        title="Amsterdam Walking Tour"
        detail="Explore popular tourist destination as well as hidden local favorites"
        price={17}
        priceDetail="per person *"
        moneyType="birr"
        reviews={28}
        bottomText="*Prices may vary depending on selected date."
        cardBorderRadius={15}
        buttonFunction={() => { alert("hi") }}
        buttonLoading={false}
        buttonIcon=""
        buttonColor="#4761CC"
        buttonText="Book now"
        buttonTextColor="#fff"
        buttonCurve="8px"
      />
      <Footer />
    </MainContainer>
  )
}


export default Main;
