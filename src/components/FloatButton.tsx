import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';

interface Props {
  onPress: () => void;
}

export default function FloatButton({onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.floatButton}>
      <Icon name="plus-thick" size={20} color="#F0F0F0" />
    </TouchableOpacity>
  );
}
