import { useContext } from 'react' //Used to flip the flexbox from row to column
import * as BsIcons from 'react-icons/bs'
import {isSmallFormFactorContext} from '../App'

import './Card.scss'
import * as DATA from './defs'

import productmobile from '../Images/productmobile.jpg'
import productdesktop from '../Images/productdesktop.jpg'

type CardProps = {}

export const Card = (props: CardProps) => {

	//State of the screen size so we can flex from row to column and vise-versa.
	const isSmallFormFactor = useContext(isSmallFormFactorContext)

	return (
		<>
			<div className='primarycard'>
				<img src={isSmallFormFactor === true ? productmobile : productdesktop} alt="product"/>
				<span className='sideinfo'>
					<p className='flexitem'>{DATA.TITLE}</p>
					<p className='flexitem impactnote'>{DATA.NOTE}</p>
					<p className='flexitem note'>{DATA.MSG}</p>
					<div className='flexitem priceitems'>
						<span className='impactnote'>${DATA.CURRENT_PRICE}</span>
						<span className='obsoletenote'>${DATA.OLD_PRICE}</span>
					</div>
					<button className='flexitem addbtn' onClick={() => console.log("Item Added")}>
						<BsIcons.BsCart2 className='cartimg'/>
						<span className='carttxt'>{DATA.BTN_PROMPT}</span>
					</button>
				</span>
			</div>
		</>
	)
}