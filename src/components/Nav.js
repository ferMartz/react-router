import React from 'react'
import { Toolbar, NavLink } from 'rebass'


const Nav = props => (

  		<Toolbar px={5} bg='transparent' color='gray9' >
			<NavLink>
				FM
			</NavLink>
			<NavLink ml='auto'>
				About
			</NavLink>
			<NavLink>
				Travel
			</NavLink>
		</Toolbar>

)

export default Nav