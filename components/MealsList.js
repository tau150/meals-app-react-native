import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealsList = (props) => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() =>  props.navigation.navigate({ routeName: 'MealDetails', params: {
          mealId: itemData.item.id
          }})}  />
    );
  };


return (
  <View style={styles.screen}>
     <FlatList keyExtractor={(item)=> item.id} data={props.listData} renderItem={renderMealItem} />
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

export default MealsList;