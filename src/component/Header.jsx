import { useContext } from "react"
import Logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext"
const Header = () => {
	const cartCtx = useContext(CartContext)
	const userProgressCtx = useContext(UserProgressContext)
	const totalCartItems = cartCtx.items.reduce((totalNumberOfValue, item) => {
		return totalNumberOfValue + item.quantity
	}, 0)
	function handleShowCart() {
		userProgressCtx.showCard()
	}
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={Logo} alt='Restaurant Logo' />
				<h1>React Food</h1>
			</div>
			<nav>
				<Button onClick={handleShowCart} textOnly>
					Cart ({totalCartItems})
				</Button>
			</nav>
		</header>
	)
}
export default Header
