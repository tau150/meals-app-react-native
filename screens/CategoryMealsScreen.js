import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import DefaultText from '../components/DefaultText';


const CategoryMealsScreen = props => {

   const availableMeals = useSelector( state => state.meals.filteredMeals)
   const categoryId = props.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

   const displayMeals = availableMeals.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0);

   if(displayMeals.length === 0) {
     return (
      <View style={styles.content}>
        <DefaultText> No meals found, maybe check your filters? </DefaultText>
      </View>
     )
   }
  return <MealsList navigation={props.navigation} listData={displayMeals}/>
}


CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  return{
    headerTitle: selectedCategory.title
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CategoryMealsScreen;