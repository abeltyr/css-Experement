import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"

// export const query = graphql`
// query ($slug: String) {
// 	site (siteMetadata:{ blogs:{ elemMatch:{title: {eq: $slug}}}}){
//     siteMetadata{
//       blogs{
//         excerpt
//         title
//         author
//         slug
//       }
//       code {
//           body
//       }
//     }
//   }
// }
// `



const PostTemplate = ({ pageContext }) => (
    <Layout>
        <h1>post title</h1>
        <p css={css`font-size:0.75rem;`}>
            Posted by (author)
         </p>
        <p>post body goes here</p>
        <pre>
            {JSON.stringify(pageContext, null, 2)}
        </pre>
        <ReadLink to="/blogs"> &larr; back to all the posts
    </ReadLink>
    </Layout>
)
export default PostTemplate;