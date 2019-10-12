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
import Logo from "../assets/LOGO.svg"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <header>
        <Link to="/">
          <Logo />
        </Link>
      </header>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
