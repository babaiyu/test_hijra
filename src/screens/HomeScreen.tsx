import React from 'react';
import {SafeAreaView} from 'react-native';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import type {PropsScreen} from '../utils/types';
import FloatButton from '../components/FloatButton';
import listItem from '../components/ListItem';
import useStore from '../states/store';
import styles from '../styles';

export default function HomeScreen({navigation}: PropsScreen) {
  const {mails, deleteMail} = useStore();

  const closeRow = (rowMap: any, rowKey: number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowKey: number) => {
    deleteMail(rowKey);
  };

  const renderData = ({item}: any, rowMap: any) => {
    const {BackButton, Front} = listItem({data: item});

    const _onLeft = () => {
      closeRow(rowMap, item?.key);
    };

    const _onRight = () => {
      closeRow(rowMap, item?.key);
      deleteRow(item?.key);
    };

    return (
      <SwipeRow useNativeDriver leftOpenValue={75} rightOpenValue={-75}>
        <BackButton onLeft={_onLeft} onRight={_onRight} />
        <Front />
      </SwipeRow>
    );
  };

  const onGoBaskets = () => {
    navigation.navigate('Baskets');
  };

  return (
    <SafeAreaView style={styles.container}>
      <SwipeListView data={mails} renderItem={renderData} />
      <FloatButton onPress={onGoBaskets} />
    </SafeAreaView>
  );
}
