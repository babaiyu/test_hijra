import React from 'react';
import {View} from 'react-native';
import CardHolder from '../components/CardHolder';
import useStore from '../states/store';
import styles from '../styles';

export default function AccountScreen() {
  const {cardHolder} = useStore();

  return (
    <View style={[styles.center, styles.container]}>
      <CardHolder data={cardHolder} />
    </View>
  );
}
