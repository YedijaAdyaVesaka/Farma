import React, { useState } from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { Clock, Save2, Notification, Like1, Setting, Home2, Book, Bookmark2, Profile, SearchFavorite, SearchNormal} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListHorizontal, ItemSmall} from '../../components';
import {BlogList, CategoryList} from '../../../data';



const FlatListCategory = () => {
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
export default function Home() {
  const [searchText, setSearchText] = useState(''); // State untuk teks pencarian
    return (
      <View style={styles.container}>
      <StatusBar translucent = {false} backgroundColor={ colors.green()}/>
      <View style={styles.header}>
        <Notification color={colors.white(1)} variant="Linear" size={25}/>
        <Image
          source={require('../../assets/images/FARMA.png')}
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
      {/* <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.navbarItem}>
          <Home2 color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem}>
          <SearchNormal color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem}>
          <Bookmark2 color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem}>
          <Profile color="rgb(22, 179, 179)" variant="Linear" size={24} />
          <Text style={styles.navbarText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
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
    listCard: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      gap: 15,
    }
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
           {/* list menu bar obat */}
          <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{...category.item, marginLeft: 24}}>
              <Image
                source={require('../../assets/images/ObatPerawatan.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5, color: colors.green()}} >Obat</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('../../assets/images/VitaminSuplemen.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5}}>Vitamin</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('../../assets/images/Ibuanak.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5}}>Ibu & Anak</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('../../assets/images/Kecantikan.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={{...category.title, marginTop: 5}}>Kecantikan</Text>
            </View>
            <View style={category.item}>
              <Image
                source={require('../../assets/images/Suplemen.png')} size={1}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
              <Text style={category.title}>Suplemen</Text>
            </View>
          </ScrollView>

          <View style={{marginLeft:25, marginRight:25, marginBottom:8, marginTop:15,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'600', color:colors.black()}}>Rekomendasi Obat</Text>
            <Text style={{fontSize:13, color:colors.blue()}}>See All</Text>
          </View>

        </View> 

        {/* //List Obat */}
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
        
        </View>
      </ScrollView>
    );
  };

 
  // const itemVertical = StyleSheet.create({
  //   listCard: {
  //     paddingHorizontal: 24,
  //     paddingVertical: 10,
  //     gap: 15,
  //   },
  //   cardItem: {
  //     backgroundColor: colors.green(0.02),
  //     flexDirection: 'row',
  //     borderRadius: 10,
  //     borderWidth: 1,
  //     borderColor: colors.green(0.6),
  //     opacity: 0.8,
  //   },
  //   cardCategory: {
  //     color: colors.green(),
  //     fontSize: 12,
  //     fontFamily: fontType['Pjs-SemiBold'],
  //   },
  //   cardTitle: {
  //     fontSize: 14,
  //     fontFamily: fontType['Pjs-Bold'],
  //     color: colors.black(),
  //   },
  //   cardText: {
  //     fontSize: 10,
  //     fontFamily: fontType['Pjs-Bold'],
  //     color: colors.green(1),
  //   },
  //   cardImage: {
  //     width: 100,
  //     height: 100,
  //     borderRadius: 10,
  //     resizeMode: 'cover',
  //   },
  //   cardInfo: {
  //     flexDirection: 'row',
  //     gap: 5,
  //     alignItems: 'center',
  //   },
  //   cardContent: {
  //     gap: 10,
  //     justifyContent: 'space-between',
  //     paddingRight: 10,
  //     paddingLeft: 15,
  //     flex: 1,
  //     paddingVertical: 10,
  //   },
  // });
  
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

















