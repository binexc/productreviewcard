import './Card.scss'
import productmobile from '../Images/productmobile.jpg'

type CardProps = {}

export const Card = (props: CardProps) => {
	return (
		<>
			<div className='primarycard'>
				<img src={productmobile} alt="product"/>
				<h3>Perfume</h3>
				<h1>Gabrielle Essence Eau De Parfum</h1>
				<p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
				<div>
					<span>$149.99</span>
					<span>$169.99</span>
				</div>
				<button>Add to Cart</button>
			</div>
		</>
	)
}