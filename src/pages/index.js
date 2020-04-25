import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SendingForm from '../components/sending-form'
import Status from '../components/status'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <SendingForm />
      <Status />
    </Layout>
  )
}

export default IndexPage
