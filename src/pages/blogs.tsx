import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/postPreview"
const IndexPage = () => {
    const posts = usePosts();
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Blogs Available</h1>
            {posts.map((post => {
                return (
                    <PostPreview key={post.slug} post={post} />

                    // <pre>
                    // {JSON.stringify(post, null, 2)}
                    // </pre>
                )
            }))}
        </Layout>
    )
}

export default IndexPage
