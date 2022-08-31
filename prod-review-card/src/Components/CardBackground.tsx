import './CardBackground.scss'
import {Card} from './Card'

type CardBackgroundProps = {}

export const CardBackground = (props: CardBackgroundProps) => {
	return (
		<>
			<div className='cardbackground'>
				<Card />
			</div>
		</>
	)
}