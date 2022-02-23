import React, {useMemo} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import {maxText} from '../utils';
import Avatar from './Avatar';

interface Props {
  data: {
    key: any;
    email: string;
    first_name: string;
    last_name: string;
    subject: string;
    message: string;
    avatar: string;
  };
}

interface BackProps {
  onLeft: () => void;
  onRight: () => void;
}

export default function listItem({data}: Props) {
  const {first_name, last_name, subject, message, avatar} = data;

  const onShowActions = () => {
    Alert.alert(
      'Action',
      'Choose action for this mail',
      [
        {
          text: 'Reply',
          onPress: () => console.log('Reply Pressed'),
        },
        {text: 'Forward', onPress: () => console.log('Forward Pressed')},
      ],
      {
        cancelable: false,
      },
    );
  };

  const BackButton = ({onLeft, onRight}: BackProps) =>
    useMemo(
      () => (
        <View style={styles.standaloneRowBack}>
          <TouchableOpacity style={styles.leftButton} onPress={onLeft}>
            <Icon name="star-outline" color="#F0F0F0" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton} onPress={onRight}>
            <Icon name="trash-can" color="#F0F0F0" size={20} />
          </TouchableOpacity>
        </View>
      ),
      [],
    );

  const Front = () =>
    useMemo(
      () => (
        <View style={styles.standaloneRowFront}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <View style={{width: '15%'}}>
              <Avatar uri={avatar} />
            </View>
            <View style={{width: '65%'}}>
              <Text>
                {first_name} {last_name}
              </Text>
              <Text style={[styles.textBold, styles.textBase]}>{subject}</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.textSmall}>24 min ago</Text>
            </View>
          </View>

          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <View style={{width: '15%', marginTop: 10}}>
              <TouchableOpacity
                onPress={onShowActions}
                style={{marginLeft: 10}}>
                <Icon name="dots-vertical" size={20} />
              </TouchableOpacity>
            </View>
            <View style={{width: '70%'}}>
              <Text>{maxText(message)}</Text>
            </View>
            <View style={{width: '15%'}}>
              <Icon name="paperclip" size={20} />
            </View>
          </View>

          {/*  */}
        </View>
      ),
      [],
    );

  return {BackButton, Front};
}
