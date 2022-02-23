import React from 'react';
import {Image} from 'react-native';
import styles from '../styles';

interface Props {
  uri: string;
}

export default function Avatar({uri}: Props) {
  return <Image source={{uri}} resizeMode="cover" style={styles.avatar} />;
}
