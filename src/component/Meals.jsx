import useHttp from "../hooks/useHttp"
import Error from "./Error"
import MealItem from "./MealItem"

const requestConfig = {}

const Meals = () => {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp("http://localhost:3000/meals", requestConfig, [])
	if (isLoading) {
		return <p className='center'>Fetching meals...</p>
	}
	if (error) {
		return <Error title='failed to fetch meals' message={error}></Error>
	}
	return (
		<ul id='meals'>
			{loadedMeals.map(meal => {
				return <MealItem key={meal.id} meal={meal} />
			})}
		</ul>
	)
}
export default Meals
