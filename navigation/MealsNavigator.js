import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';




const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealScreen
  },
  MealDetails: {
    screen: MealDetailsScreen
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
})


export default createAppContainer(MealsNavigator);