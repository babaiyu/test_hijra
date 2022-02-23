import React, {useMemo, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
import CircleCard from './CircleCard';

interface Props {
  data: {number: string; validThru: string; holderName: string};
}

export default function CardHolder({data}: Props) {
  const {number, validThru, holderName} = data;
  const [show, setShow] = useState(false);

  const cardNumber = useMemo(() => {
    let splitNum = number.split('-');
    let result = '';

    if (show)
      splitNum.forEach(it => {
        result = `${result} ${it}`;
      });
    else result = `•••• •••• •••• 2538`;

    return result;
  }, [show]);

  const onShow = () => {
    setShow(!show);
  };

  return useMemo(
    () => (
      <TouchableWithoutFeedback onPress={onShow}>
        <LinearGradient
          colors={['#b06ab3', '#4568dc', '#6dd5ed']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.cardGradient, styles.content]}>
          <View>
            <CircleCard />
          </View>

          <View style={{marginVertical: 10}}>
            <Text style={[styles.textWhite, styles.textMedium]}>
              {cardNumber}
            </Text>
          </View>

          <View style={[styles.row, {marginTop: 10}]}>
            <View style={{width: '50%'}}>
              <Text style={styles.textWhite}>VALID THRU</Text>
              <Text
                style={[styles.textWhite, styles.textBold, styles.textBase]}>
                {validThru}
              </Text>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.textWhite}>CARD HOLDER</Text>
              <Text
                style={[styles.textWhite, styles.textBold, styles.textBase]}>
                {holderName}
              </Text>
            </View>
          </View>

          {/*  */}
        </LinearGradient>
      </TouchableWithoutFeedback>
    ),

    [show, data],
  );
}
