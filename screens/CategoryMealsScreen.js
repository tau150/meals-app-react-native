import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';

const CategoryMealsScreen = props => {

   const categoryId = props.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

   const displayMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0);

  return <MealsList navigation={props.navigation} listData={displayMeals}/>
}


CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  return{
    headerTitle: selectedCategory.title
  }
};


export default CategoryMealsScreen;