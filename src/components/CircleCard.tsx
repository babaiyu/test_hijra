import React from 'react';
import {View} from 'react-native';
import styles from '../styles';

export default function CircleCard() {
  return (
    <View style={styles.row}>
      <View style={styles.circleCard} />
      <View style={[styles.circleCard, {marginLeft: -25}]} />
    </View>
  );
}
