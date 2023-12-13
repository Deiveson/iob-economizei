import React from 'react'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from "components/molecules/Sidebar";
import GlobalStyle from "./theme/globalstyle";
import {ThemeProvider} from "styled-components";
import {themeAttributes} from "theme/themeAttributes";
import {AppStyles} from "./app.styles";
import {ExtractProvider} from "./context/ExtractContext";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={themeAttributes}>
			<GlobalStyle />
				<AppStyles>
					<ExtractProvider>
						<Sidebar/>
						<Router />
					</ExtractProvider>
				</AppStyles>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
