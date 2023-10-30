import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import {fontType, colors} from '../theme';
  import FastImage from 'react-native-fast-image';
  import {Like1} from 'iconsax-react-native';
  
  const ItemHorizontal = ({item, variant, onPress}) => {
    return (
      <View style={itemHorizontal.cardItem}>
        <FastImage
          style={itemHorizontal.cardImage}
          source={{
              uri: item.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}>
          <View style={itemHorizontal.cardContent}>
            <View style={itemHorizontal.cardInfo}>
              <Text style={itemHorizontal.cardTitle}>{item.title}</Text>
              <Text style={itemHorizontal.cardText}>{item.detail}</Text>
            </View>
            <View>
              <View style={itemHorizontal.cardIcon}>
                <TouchableOpacity onPress={onPress}>
                <Like1
                color="rgb(255, 255, 255)"
                variant={variant}
                size={30}
                style={itemHorizontal.icon}
              />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </FastImage>
      </View>
    );
  };

  const ListHorizontal = ({data}) => {
    const [like, setLike] = useState([]);
    const toggleLike = itemId => {
        if (like.includes(itemId)) {
        setLike(like.filter(id => id !== itemId));
        } else {
        setLike([...like, itemId]);
        }
    };
    const renderItem = ({item}) => {
        variant = like.includes(item.id) ? 'Bold' : 'Linear';
        return (
        <ItemHorizontal
            item={item}
            variant={variant}
            onPress={() => toggleLike(item.id)}
        />
        );
    };
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={item => renderItem({...item})}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
        contentContainerStyle={{paddingHorizontal: 24}}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  };
  export default ListHorizontal;
  
  const itemHorizontal = StyleSheet.create({
    cardItem: {
      width: 325,
      marginLeft: 5,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 5,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
    },
    cardInfo: {
      justifyContent: 'flex-end',
      height: '100%',
      gap: 10,
      maxWidth: '60%',
    },
    cardTitle: {
      fontFamily: fontType['Pjs-Bold'],
      fontSize: 15,
      color: colors.white(),
    },
    cardText: {
      fontSize: 10,
      color: colors.white(),
      fontFamily: fontType['Pjs-Medium'],
    },
    cardIcon: {
      padding: 5,
      // marginHorizontal : 10,
      marginTop : 130,
    },
  });