import React from 'react';
import {View, Text, StyleSheet, FlatList}  from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {}}
      />
    );
  };

   const categoryId = props.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

   const displayMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0);


  return (
    <View style={styles.screen}>
      <FlatList keyExtractor={(item)=> item.id} data={displayMeals} renderItem={renderMealItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
  }
})

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  return{
    headerTitle: selectedCategory.title
  }
};


export default CategoryMealsScreen;