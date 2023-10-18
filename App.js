import React, { useState } from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {Receipt21, Clock, Message, Save2, Notification, Like, Like1} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Home Bar
export default function App() {
  const [searchText, setSearchText] = useState(''); // State untuk teks pencarian
    return (
      <View style={styles.container}>
      <StatusBar translucent = {false} backgroundColor={ colors.green()}/>
      <View style={styles.header}>
        <Notification color={colors.white(1)} variant="Linear" size={25}/>
        <Image
          source={require('./src/assets/images/FARMA.png')}
          style={styles.centerImage}
        />
        <FontAwesome5 name = "user" size={20} color={colors.white()}/>
         </View>
         
         
         {/* Search Bar */}
         <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBarInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <FontAwesome5 name="search" size={15} color={colors.grey()} style={styles.searchIcon} />
        </View>
      <ListBlog />
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
   
    
    container: {                                              
      flex: 1,
      backgroundColor: colors.white(),

    },               
    header: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: colors.green(),
      alignItems: 'center',
      height:52,
      elevation: 8,
      paddingTop:8,
      paddingBottom:4
    },
    centerImage: {
      width: 90, // Sesuaikan lebar gambar
      height: 20, // Sesuaikan tinggi gambar
    },

    //search bar
    searchBarContainer: {
      backgroundColor: 'rgba(22, 179, 179, 0.2)', // Latar belakang dengan transparansi
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
    searchBarInput: {
      backgroundColor: 'transparent',
      paddingHorizontal: 10,
      height: 40,
      flex: 1,
    },

    searchIcon: {
      marginRight: 10,
    },

    title: {
      fontSize: 20,
      fontFamily: fontType['Pns-Bold'],
      color: colors.green(),
    },
    listCategory: {
      paddingVertical: 10,
    },
    listBlog: {
      paddingVertical: 10,
      gap: 10,
    },
  });
  const category = StyleSheet.create({
    item: {
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: colors.grey(0.08),
      marginHorizontal:5
    },
    title: {
      fontFamily: fontType['Pns-SemiBold'],
      fontSize: 14,
      lineHeight: 18,
      color: colors.grey(),
    },
  })
  
  
  const ListBlog = () => {
    return (
      <ScrollView style={{ marginBottom: 30 }}>
        <View style={styles.listBlog}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{gap: 1}}>
            <View style={{...itemHorizontal.cardItem}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={require('./src/assets/images/Obattablet.jpg')}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                    Top Vitamins for Interseasonal Period
                    </Text>
                        <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{...itemHorizontal.cardItem}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={require('./src/assets/images/5Vitamin.jpg')}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                    Avoid Medication Overuse
                    </Text>
                    <Text style={styles.readMoreText}>Read More</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{...itemHorizontal.cardItem}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={require('./src/assets/images/Sick1.jpg')}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                    Paracetamol:Solution for Aches and Pains
                    </Text>
                    <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{...itemHorizontal.cardItem}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={require('./src/assets/images/Skincare1.jpg')}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Nature-E : Radiant Beauty: Exclusive Care
                    </Text>
                    <Text style={itemHorizontal.cardText}>Baca Selengkapnya</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>           
          </ScrollView>

           {/* list menu bar obat */}
          <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{...category.item, marginLeft: 24}}>
              <Image
                source={require('./src/assets/images/ObatPerawatan.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5}} >Obat</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('./src/assets/images/VitaminSuplemen.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5}}>Vitamin</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('./src/assets/images/Ibuanak.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5}}>Ibu & Anak</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('./src/assets/images/Kecantikan.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5}}>Kecantikan</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('./src/assets/images/Suplemen.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={category.title}>Suplemen</Text>
            </View>
          </ScrollView>

          <View style= {{marginTop : 5}}>
              <Text style={{ fontWeight: '700', padding: 5 , marginLeft: 24,marginTop : 5, fontSize: 18 }}>Produk</Text>
          </View>
        </View> 
          
          {/* list Obat */}
        
          <View style={{...itemVertical.listCard, marginTop: 1}}>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={require('./src/assets/images/Paratusin.jpg')}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Obat</Text>
                    <Text style={itemVertical.cardTitle}>
                    Paratusin Tablet
                    </Text>
                  </View>
                  <Save2
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>3x1 tablet/hari</Text>
                  
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={require('./src/assets/images/Imboost.png')}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Suplemen</Text>
                    <Text style={itemVertical.cardTitle}>
                      Imboost 2 Strip (10 Tablet/Strip)
                    </Text>
                  </View>
                  <Save2
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={15}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>3x1 tablet/hari</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
            <Image
                style={itemVertical.cardImage}
                source={require('./src/assets/images/Parasol.jpg')}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Kecantikan</Text>
                    <Text style={itemVertical.cardTitle}>
                    Parasol Face Sunblock Spf 33 
                    </Text>
                  </View>
                  <Save2
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={15}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>30 menit sebelum beraktivitas</Text>
                </View>
              </View>
            </View>
            
            <View style={itemVertical.cardItem}>
            <Image
                style={itemVertical.cardImage}
                source={require('./src/assets/images/Actifed.jpg')}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Obat</Text>
                    <Text style={itemVertical.cardTitle}>Actifed Plus Sirup 60 ml</Text>
                  </View>
                  <Save2
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={15}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>2x1 Sendok/hari </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

 
  const itemVertical = StyleSheet.create({
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
      fontFamily: fontType['Pns-SemiBold'],
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: fontType['Pns-Bold'],
      color: colors.black(),
    },
    cardText: {
      fontSize: 10,
      fontFamily: fontType['Pns-Bold'],
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
  const itemHorizontal = StyleSheet.create({
    cardItem: {
      width: 330,
      marginLeft: 15,
      marginRight: 15,
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
      fontFamily: fontType['Pns-Bold'],
      fontSize: 14,
      color: colors.white(),
    },
    cardText: {
      fontSize: 10,
      color: colors.white(),
      fontFamily: fontType['Pns-Medium'],
    },
    cardIcon: {
      backgroundColor: colors.white(0.33),
      padding: 5,
      borderColor: colors.white(),
      borderWidth: 0.5,
      borderRadius: 5,
    },
  });