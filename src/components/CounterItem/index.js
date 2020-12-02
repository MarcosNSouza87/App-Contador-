import React from 'react';
import {TouchableOpacity,Text } from 'react-native';
import styles from './styles';

const ItemCounter = ({ item, onPress, style,styledSubtitle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={[styles.subTitle,styledSubtitle]}>{item.count}</Text>
  </TouchableOpacity>
);


export default ItemCounter;