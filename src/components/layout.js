import * as React from 'react'
import { Link} from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    return (
        <main className={container}>
            <img alt="mimik.com" src="https://mimik.com/wp-content/uploads/2020/01/edge-cloud-logo.png" />
            {children}
        </main>
    )
}

export default Layout