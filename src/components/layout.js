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
            {children}
        </main>
    )
}

export default Layout