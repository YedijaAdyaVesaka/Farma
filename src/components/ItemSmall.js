import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Save2, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';
import {formatDate} from '../utils/formatDate';

const ItemSmall = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item?.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}>
          <View style={{gap: 5, flex: 1}}>
            {/* <Text style={styles.cardCategory}>{item.category?.name}</Text> */}
            <Text style={styles.cardTitle}>{item?.title}</Text>
          </View>
          <Save2 color={colors.grey(0.6)} variant="Linear" size={20} />
        </View>
        <View style={styles.cardInfo}>
          {/* <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
          <Text style={styles.cardText}>{formatDate(item?.createdAt)}</Text>
          <Message size={10} variant="Linear" color={colors.grey(0.6)} />
          <Text style={styles.cardText}>{item?.totalComments}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemSmall;
const styles = StyleSheet.create({
    listCard: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        gap: 15,
      },
      cardItem: {
        backgroundColor: colors.green(0.02),
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.green(0.6),
        opacity: 0.8,
      },
      cardCategory: {
        color: colors.green(),
        fontSize: 12,
        fontFamily: fontType['Pjs-SemiBold'],
      },
      cardTitle: {
        fontSize: 14,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.black(),
      },
      cardText: {
        fontSize: 10,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.green(1),
      },
      cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover',
      },
      cardInfo: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
      },
      cardDesc: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'flex-end',
      },
      cardContent: {
        gap: 10,
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 15,
        flex: 1,
        paddingVertical: 10,
      },
});