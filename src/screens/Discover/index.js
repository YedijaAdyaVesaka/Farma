import {StyleSheet, Text, View, ScrollView, FlatList, StatusBar, Image, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, RefreshControl} from 'react-native';
import React, { useState, useCallback} from 'react';
import {BlogList} from '../../../data';
import FastImage from 'react-native-fast-image';
import {ItemSmall} from '../../components'; 
import {SearchNormal1, Save2, Clock, ArrowCircleLeft, Add} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import axios from 'axios';

const Discover = () => {
    const navigation = useNavigation();

    const recentBlog = BlogList.slice(5);

    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const getDataBlog = async () => {
      try {
        const response = await axios.get(
          'https://656ac127dac3630cf727450d.mockapi.io/farma/blog',
        );
        setBlogData(response.data);
        setLoading(false)
      } catch (error) {
          console.error(error);
      }
    };
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        getDataBlog()
        setRefreshing(false);
      }, 1500);
    }, []);
  
    useFocusEffect(
      useCallback(() => {
        getDataBlog();
      }, [])
    );

    return (
      <View style={styles.container}>
        <StatusBar translucent = {false} backgroundColor={ colors.green()}/>
        <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
        <View style={styles.header}>
          <TouchableOpacity>
            <ArrowCircleLeft color={'rgb(22, 179, 179)'} variant="Linear" size={28} />
          </TouchableOpacity>
          <View style={styles.bar}>
            <SearchNormal1 size={18} color={colors.white(1)} variant="Linear" />
            <Text style={styles.placeholder}>Search</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
        <View>

        </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          <View style={styles.listCard}>
            {loading ? (
              <ActivityIndicator size={'large'} color={colors.blue()} />
            ) : (
              blogData.map((item, index) => <ItemSmall item={item} key={index} />)
            )}
            {/* {recentBlog.map((item, index) => (
              <ItemSmall item={item} key={index} />
            ))} */}
          </View>
        </ScrollView>
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => navigation.navigate("AddBlog")}>
            <Add color={colors.white()} variant="Linear" size={20} />
        </TouchableOpacity>
      </View>
    );
  };
  export default Discover;


 const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop :10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  headerContainer: {
    backgroundColor: 'rgba(22, 179, 179, 0.2)',
    paddingBottom: 10,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  header: {
    paddingHorizontal: 15,
    gap: 30,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(22, 179, 179, 0.5)',
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.white(1),
    lineHeight: 18,
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
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
  floatingButton: {
    backgroundColor: colors.green(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});