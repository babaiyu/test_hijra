import React, {useMemo} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useStore from '../states/store';
import styles from '../styles';
import {maxText} from '../utils';

export default function BasketsScreen() {
  const {baskets, plusQty, minQty} = useStore();

  const renderItem = ({item}: any) => {
    const {id, title, price, category, image, qty} = item;

    const onPlus = () => {
      plusQty(id);
    };

    const onMin = () => {
      minQty(id);
    };

    return (
      <View
        style={[
          styles.standaloneRowFront,
          styles.row,
          {justifyContent: 'space-between'},
        ]}>
        <View style={[{width: '20%', justifyContent: 'center'}]}>
          <Image
            source={{uri: image}}
            style={styles.imageCart}
            resizeMode="cover"
          />
        </View>

        <View style={{width: '60%'}}>
          <Text style={[styles.textBold, styles.textBase]}>
            {maxText(title, 20)}
          </Text>
          <Text>Category: {category}</Text>
          <Text style={styles.textBase}>
            Price: <Text style={styles.textBold}>${price * qty}</Text>
          </Text>

          <View style={[styles.row, {marginTop: 5}]}>
            <TouchableOpacity onPress={onMin}>
              <Icon name="minus" size={20} />
            </TouchableOpacity>
            <Text style={{marginHorizontal: 15}}>{qty}</Text>
            <TouchableOpacity onPress={onPlus}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[{width: '20%', justifyContent: 'center'}, styles.center]}>
          <TouchableOpacity>
            <Icon name="trash-can" size={25} color="#dd2c00" />
          </TouchableOpacity>
        </View>

        {/*  */}
      </View>
    );
  };

  const RenderFooter = () => {
    const subTotal = useMemo(() => {
      let result = 0;

      for (let i = 0; i < baskets.length; i++) {
        const el = baskets[i];
        const priceItem = el.price * el.qty;
        result += priceItem;
      }

      return result;
    }, [baskets]);

    return (
      <View style={[styles.center, styles.content]}>
        <Text style={styles.textMedium}>
          SubTotal: <Text style={styles.textBold}>${subTotal}</Text>
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={baskets}
        keyExtractor={(it: any) => it.id}
        renderItem={renderItem}
        ListFooterComponent={<RenderFooter />}
      />
    </SafeAreaView>
  );
}
