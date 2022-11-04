import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'container/Main/Main'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { StyledEngineProvider } from '@mui/material'

type Props = {}

export const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}

export default App
