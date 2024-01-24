import { createContext, useState } from "react"

const UserProgressContext = createContext({
	progress: "",
	showCard: () => {},
	hideCard: () => {},
	showCheckout: () => {},
	hideCheckout: () => {},
})

export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState("")
	function showCard() {
		setUserProgress("cart")
	}
	function hideCard() {
		setUserProgress("")
	}
	function showCheckout() {
		setUserProgress("checkout")
	}
	function hideCheckout() {
		setUserProgress("")
	}

	const userProgressCtx = {
		progress: userProgress,
		showCard,
		hideCard,
		showCheckout,
		hideCheckout,
	}

	return (
		<UserProgressContext.Provider value={userProgressCtx}>
			{children}
		</UserProgressContext.Provider>
	)
}

export default UserProgressContext
