import React from 'react'
import { Flex, Box, Button, BackgroundImage, Heading, Text } from 'rebass'
import text from './data.json'



const Header = props => (
       
  		<Flex wrap>
  		     			
			<Box pt={6} p={5} width={[ 1, null, 2/3, 2/3 ]}>
			  	<Heading >{text.themeTitle}</Heading>
				<Text
					pt={3}
					children={text.includes}
				/>
				<Text 
				pt={2}
				children={text.tools}
				/>
				<Flex align='center' pt={3}>
					<Button is='a' 
					       href='#!'
					       children='github'
					       bg='tomato' 
			        />
					<Box mx={1} />
					<Button is='a' 
					       href='#!'
					       children='facebook'
					       bg='tomato' 
			        />
					<Box mx={1} />
					<Button is='a' 
					       href='#!'
					       children='twitter'
					       bg='tomato' 
			        />
					<Box mx={1} />
				</Flex>
			</Box>
			
			
		</Flex>
		

)

export default Header


