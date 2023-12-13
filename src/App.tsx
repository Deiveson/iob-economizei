import React from 'react'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from "components/Molecules/Sidebar";
import GlobalStyle from "./theme/globalstyle";
import {ThemeProvider} from "styled-components";
import {themeAttributes} from "theme/themeAttributes";
import {AppStyles} from "./app.styles";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={themeAttributes}>
			<GlobalStyle />
				<AppStyles>
					<Sidebar/>
					<Router />
				</AppStyles>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
