import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import {Platform, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle:{
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

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
  defaultNavigationOptions: defaultStackOptions
})

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetails: MealDetailsScreen
}, defaultStackOptions)

const tabsScreenConfig =   {
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Colors.primaryColor,
    tabBarLabel: Platform === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    }},
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
    },
    tabBarColor: Colors.accentColor
  }}
}

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  defaultStackOptions: defaultStackOptions})


const MealsFavTabsNavigator = Platform === 'android' ? createMaterialBottomTabNavigator(tabsScreenConfig, {
  activeColor: {
    activeTintColor: Colors.accentColor,
    shifting: true
  }
}) : createBottomTabNavigator(tabsScreenConfig, {
  tabBarOptions: {
    labelStyle: 'open-sans-bold',
    activeTintColor: Colors.accentColor
  }
});

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabsNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);


export default createAppContainer(MainNavigator);