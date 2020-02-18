import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoryMealsScreen = props => {
   const categoryId = props.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(category => category.id === categoryId);


  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Details!" onPress={ ()=> props.navigation.navigate('MealDetails') }/>

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