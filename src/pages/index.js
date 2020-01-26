import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'
import Status from '../components/status'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <Form />
      <Status />
    </Layout>
  )
}

export default IndexPage
