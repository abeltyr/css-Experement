import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { MainContainer, BackgroundContainer, BlockContainer } from "./style"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const About = () => {


  const data = useStaticQuery(graphql`
    query {
      backgroundImage : file(relativePath: { eq: "design.png" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      upsideDown : file(relativePath: { eq: "upsideDown.png" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div style={{
      overflowX: "hidden"
    }}>
      <Header />
      <MainContainer
      // image={data.backgroundImage && data.backgroundImage.sharp.fluid.src}
      >
        <p className="midText">
          I'm Some Name
        </p>
        <p className="lowerText">
          I have a passion for creating beautiful and delight experiences.
        </p>
      </MainContainer>
      <BackgroundContainer>
        <p>hello</p>
      </BackgroundContainer>
      <BlockContainer>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            Text Goes
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            A Longer Text Example Goes here
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            Text Goes
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            A Longer Text Example Goes here
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            Text Goes
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            A Longer Text Example Goes here
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            Text Goes
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            A Longer Text Example Goes here
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            Text Goes
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.backgroundImage && data.backgroundImage.sharp.fluid} alt="main-background" />
          <p>
            A Longer Text Example Goes here
          </p>
        </div>
        <div className="card">
          <Img className="displayImage" fluid={data.upsideDown && data.upsideDown.sharp.fluid} alt="main-background" />
          <p>
            A Longer Text Example Goes here
          </p>
        </div>
      </BlockContainer>
      <Footer />
    </div >
  )
}


export default About;
