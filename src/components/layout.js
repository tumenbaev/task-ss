/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

import "./reset.css"
import './layout.css'
import Logo from "../assets/logo.svg"

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const Header = styled.header`
  margin-top: 40px;
  line-height: 0;
  margin-bottom: 20px;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <Logo />
        </Link>
      </Header>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
