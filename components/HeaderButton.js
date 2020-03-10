import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import  Colors  from '../constants/Colors';
import { Header } from 'react-native/Libraries/NewAppScreen';

const CustomHeaderButtons = props => {
  return <HeaderButton {...props} IconComponent={Icon} iconSize={23} color={ Platform.os === 'android' ? 'white' : Colors.primaryColor} />
}

export default CustomHeaderButtons;