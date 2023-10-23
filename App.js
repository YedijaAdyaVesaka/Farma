import React, { useState } from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Settings} from 'react-native';
import { Clock, Save2, Notification, Like1, Setting, Home2, Book, Bookmark2, Profile} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListHorizontal, Navbar } from './src/components';
import {CategoryList, BlogList} from './data';

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.black() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};


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
        <Setting color={colors.white(1)} variant="Linear" size={25}/>
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
      
       {/* Navbar */}
      <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.navbarItem}>
          <Home2 color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem}>
          <Book color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>Other</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem}>
          <Bookmark2 color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem}>
          <Profile color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>Profile</Text>
        </TouchableOpacity>
      </View>
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

    //Navbar
    navbarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 60,
      elevation: 5,
    },
    navbarItem: {
      alignItems: 'center',
      padding: 10,
    },
    navbarText: {
      fontSize: 12,
      color: 'rgb(0, 0, 0)',
      marginTop: 1,
    },

    title: {
      fontSize: 20,
      fontFamily: fontType['Pjs-Bold'],
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
    const horizontalData = BlogList.slice(0, 5);
    const verticalData = BlogList.slice(5);
    return (
      <ScrollView style={{ marginBottom: 30 }}>
        <View style={styles.listBlog}>
          <ListHorizontal data={horizontalData} />
          {/* <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{gap: 1}}>
            <View style={{...itemHorizontal.cardItem}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={{
                    uri: 'https://images.pexels.com/photos/16053688/pexels-photo-16053688/free-photo-of-bottle-of-pharmaceutics-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600',
                  }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                    Top Vitamins for Interseasonal Period
                    </Text>
                    <Text style={itemHorizontal.cardText}>Baca Selengkapnya</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={25} />
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
                source={{
                  uri: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpdGFtaW58ZW58MHx8MHx8fDA%3D',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                    Avoid Medication Overuse
                    </Text>
                    <Text style={itemHorizontal.cardText}>Baca Selengkapnya</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={25} />
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
                source={{
                  uri: 'https://images.pexels.com/photos/3987152/pexels-photo-3987152.jpeg?auto=compress&cs=tinysrgb&w=600',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                    Paracetamol:Solution for Aches and Pains
                    </Text>
                    <Text style={itemHorizontal.cardText}>Baca Selengkapnya</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={25} />
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
                source={{
                  uri: 'https://images.pexels.com/photos/6663469/pexels-photo-6663469.jpeg?auto=compress&cs=tinysrgb&w=600',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Nature-E : Radiant Beauty: Exclusive Care
                    </Text>
                    <Text style={itemHorizontal.cardText}>Baca Selengkapnya</Text>
                  </View>
                  <View>
                    <View style={itemVertical.cardIcon}>
                      <Like1 color={colors.white()} variant="Linear" size={25} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>           
          </ScrollView> */}

           {/* list menu bar obat */}
          <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{...category.item, marginLeft: 24}}>
              <Image
                source={require('./src/assets/images/ObatPerawatan.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5, color: colors.green()}} >Obat</Text>
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
                source={{
                  uri: 'https://d2qjkwm11akmwu.cloudfront.net/products/869854_23-8-2022_7-58-32-1665761450.webp',
                }}
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
                source={{
                  uri: 'https://d2qjkwm11akmwu.cloudfront.net/products/506103_1-9-2023_14-33-56.webp',
                }}
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
                source={{
                  uri: 'https://d2qjkwm11akmwu.cloudfront.net/products/3940-1665770596.webp',
                }}
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
                source={{
                  uri: 'https://d2qjkwm11akmwu.cloudfront.net/products/846513_22-9-2021_10-13-39-1665760948.webp',
                }}
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
  
  // const itemHorizontal = StyleSheet.create({
  //   cardItem: {
  //     width: 330,
  //     marginLeft: 15,
  //     marginRight: 15,
  //   },
  //   cardImage: {
  //     width: '100%',
  //     height: 200,
  //     borderRadius: 5,
  //   },
  //   cardContent: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     padding: 15,
  //   },
  //   cardInfo: {
  //     justifyContent: 'flex-end',
  //     height: '100%',
  //     gap: 10,
  //     maxWidth: '60%',
  //   },
  //   cardTitle: {
  //     fontFamily: fontType['Pjs-Bold'],
  //     fontSize: 15,
  //     color: colors.white(),
  //   },
  //   cardText: {
  //     fontSize: 10,
  //     color: colors.white(),
  //     fontFamily: fontType['Pjs-Medium'],
  //   },
  //   cardIcon: {
  //     backgroundColor: colors.white(0.33),
  //     padding: 5,
  //     borderColor: colors.white(),
  //     borderWidth: 0.5,
  //     borderRadius: 5,
  //   },
  // });