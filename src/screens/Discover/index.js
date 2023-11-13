import {StyleSheet, Text, View, ScrollView, FlatList, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {SearchNormal1, Save2, Clock, ArrowCircleLeft} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

const Discover = () => {
    const recentBlog = BlogList.slice(5);
    return (
      <View style={styles.container}>
        <StatusBar translucent = {false} backgroundColor={ colors.green()}/>
        <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <ArrowCircleLeft color={'rgb(22, 179, 179)'} variant="Linear" size={28} />
          </TouchableOpacity>
          <View style={styles.bar}>
            <SearchNormal1 size={18} color={colors.white(1)} variant="Linear" />
            <Text style={styles.placeholder}>Search</Text>
          </View>
        </View>
        <View>

        </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listCard}>
            {recentBlog.map((item, index) => (
              <ItemSmall item={item} key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
  export default Discover;


 const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    paddingTop :10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
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
});
