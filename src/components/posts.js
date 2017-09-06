import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { Provider, Heading } from 'rebass'


// Components
import Nav from './Nav'
import Header from './Header'
import Fifty from './SectionFifty'



injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; color: #374047}
`


class Posts extends Component {
	render() {
		return (
			<Provider
				theme={{
						font: '"Roboto Mono", Menlo, monospace'
			          }}
			>				
				<Nav />
				<Header />
				    

			</Provider>
		)
	}
}

export default Posts