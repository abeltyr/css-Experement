import React from "react"

import Layout from "../components/layout"
import Wave from "../components/wave"

const IndexPage = () => (
  <Layout>
    {/* # Contact ME

    you can get in touch with me by opening the nearest window and telling out of it real loud


    ## Or you can wave to me

    Just Click the button to simulate a friendly wave

    <Wave />

    Please note that i may not wave back. this because i am very far away
    and probably didn't see you click this button */}

    <h1>
      Contact ME
    </h1>

    <p>you can get in touch with me by opening the nearest window and telling out of it real loud</p>

    <h2>
      Or you can wave to me
    </h2>

    <p>
      Just Click the button to simulate a friendly wave
    </p>

    <Wave />

    <br></br>
    <br></br>
    <p> Please note that i may not wave back. this because i am very far away
    and probably didn't see you click this button</p>

  </Layout>
)

export default IndexPage
