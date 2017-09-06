import React from 'react'
import { Flex, Box, BackgroundImage, Heading, Text, Container, Subhead } from 'rebass'
import text from './data.json'

const darkBg = { background: "#374047" }

const Fifty = props => (
     <div style={ darkBg }>
	 <Flex wrap color='white'>
	    <Box width={[1,1/2,null,1/2]}>
		    <BackgroundImage
				ratio={1}
				src='https://s3.amazonaws.com/fermartz/misc/fm1.jpg'
			>
			<Flex
				wrap
				p={5}
				color='white'>
				<Heading
				    children='Heading'
				/>
				<Text 
					pt={3}
					children={text.para1}
				/>
				
			</Flex>		      
		    </BackgroundImage>
	    </Box>
	    <Box width={[1,1/2,null,1/2]}>
	        
	        <Flex
				p={6}
				justify='center'
				align='center'
				>

				<Heading>Hello</Heading>
			</Flex>		  
	        
	    </Box>
	  </Flex>
	  </div>
)

export default Fifty