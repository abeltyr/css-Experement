import React from "react"
import Layout from "../../components/layout"
import Quote from "../../screen/quote"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Quote />
  </Layout>
)

export default IndexPage
