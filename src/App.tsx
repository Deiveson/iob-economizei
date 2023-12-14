import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { themeAttributes } from 'theme/themeAttributes'

import Sidebar from 'components/molecules/Sidebar'

import { AppStyles } from './app.styles'
import { ExtractProvider } from './context/ExtractContext'
import { Router } from './router'
import GlobalStyle from './theme/globalstyle'

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={themeAttributes}>
                <GlobalStyle />
                <AppStyles>
                    <ExtractProvider>
                        <Sidebar />
                        <Router />
                    </ExtractProvider>
                </AppStyles>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
