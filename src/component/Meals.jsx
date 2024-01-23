import { useEffect, useReducer, useState } from "react"
import MealItem from "./MealItem"

const Meals = () => {
	const [loadedMeals, setLoadedMeals] = useState([])
	useEffect(() => {
		async function fetchMeals() {
			const response = await fetch("http://localhost:3000/meals")
			if (!response.ok) {
				console.log("cos nie działa")
			}
			const meals = await response.json()
			setLoadedMeals(meals)
		}

		fetchMeals()
	}, [])

	return (
		<ul id='meals'>
			{loadedMeals.map(meal => {
				return <MealItem key={meal.id} meal={meal} />
			})}
		</ul>
	)
}
export default Meals
