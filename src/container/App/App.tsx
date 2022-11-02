import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'container/Main/Main'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type Props = {}

export const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
