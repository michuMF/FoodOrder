import { useContext } from "react"
import Modal from "./UI/Modal"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../util/formatting"
import Button from "./UI/Button"
import UserProgressContext from "../store/UserProgressContext"
import CartItem from "./CartItem"

const Cart = () => {
	const userProgressCtx = useContext(UserProgressContext)
	const cartCtx = useContext(CartContext)
	const cartTotal = cartCtx.items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0
	)

	const handleCloseCard = () => {
		userProgressCtx.hideCard()
	}
	function handleOpenCheckout() {
		userProgressCtx.showCheckout()
	}
	return (
		<Modal
			className='cart'
			open={userProgressCtx.progress === "cart"}
			onClose={userProgressCtx.progress === "cart" ? handleCloseCard : null}>
			<h2> Your Cart </h2>
			<ul>
				{cartCtx.items.map(item => (
					<CartItem
						key={item.id}
						name={item.name}
						price={item.price}
						quantity={item.quantity}
						onIncrease={() => cartCtx.addItem(item)}
						onDecrease={() => cartCtx.removeItem(item.id)}
					/>
				))}
			</ul>
			<p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
			<p className='modal-actions'>
				<Button textOnly onClick={handleCloseCard}>
					Close
				</Button>
				{cartCtx.items.length > 0 && (
					<Button onClick={handleOpenCheckout}>Go to checkout</Button>
				)}
			</p>
		</Modal>
	)
}
export default Cart
