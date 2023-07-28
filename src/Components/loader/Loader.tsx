import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<Spinner
			width='30px'
			height='30px'
			thickness='3px'
			speed='1s'
			emptyColor='#FF4656'
			color='#1F2326'
			size='xs'
			display='block'
			className='mx-auto'
		/>
	)
}

export default Loader
