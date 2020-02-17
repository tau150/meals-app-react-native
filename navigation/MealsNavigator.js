import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';



const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealScreen
  },
  MealDetails: {
    screen: MealDetailsScreen
  }
})

export default createAppContainer(MealsNavigator);