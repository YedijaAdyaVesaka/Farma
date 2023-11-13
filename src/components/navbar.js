// import {
//     StyleSheet,
//     Text,
//     View,
//     FlatList,
//     TouchableOpacity,
//     Image,
//   } from 'react-native';
//   import React, {useState} from 'react';
//   import {fontType, colors} from '../theme';
//   import {selected} from 'iconsax-react-native';
//   const navbar = ({item, variant, onPress}) => {
//     return (
//       <View style={styles.navbarContainer}>
//         <TouchableOpacity style={styles.navbarItem}>
//           <Home1 color="rgb(255, 161, 0)" variant="Linear" size={24} />
//           <Text style={styles.navbarText}>{item.title}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   const ListNavbar = ({data}) => {
//     const [selected, setSelected] = useState([]);
//     const toggleselected = itemId => {
//       if (selected.includes(itemId)) {
//         setSelected(selected.filter(id => id !== itemId));
//       } else {
//         setSelected([...selected, itemId]);
//       }
//     };
//     const renderItem = ({item}) => {
//       variant = selected.includes(item.id) ? 'Bold' : 'Linear';
//       return (
//         <ItemHorizontal
//           item={item}
//           variant={variant}
//           onPress={() => toggleselected(item.id)}
//         />
//       );
//     };
//     return (
//       <FlatList
//         data={data}
//         keyExtractor={item => item.id}
//         renderItem={item => renderItem({...item})}
//         ItemSeparatorComponent={() => <View style={{width: 15}} />}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     );
//   };
//   export default ListNavbar;
//   const styles = StyleSheet.create({
//     navbarContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       backgroundColor: 'white',
//       height: 50,
//       elevation: 5,
//     },
//     navbarItem: {
//       alignItems: 'center',
//       padding: 10,
//     },
//     navbarText: {
//       fontSize: 12,
//       color: 'rgb(0, 0, 0)',
//       marginTop: 1,
//     },
//     container: {
//       flex: 1,
//       backgroundColor: colors.white(),
//     },
//     header: {
//       paddingHorizontal: 24,
//       flexDirection: 'row',
//       alignItems: 'center',
//       height: 52,
//       elevation: 8,
//       paddingTop: 8,
//       paddingBottom: 4,
//     },
//     headerPopuler: {
//       paddingHorizontal: 24,
//       marginTop: 5,
//       marginBottom: 0,
//     },
//     titleContainer: {
//       flex: 1,
//     },
//     title: {
//       fontSize: 20,
//       marginRight: 20,
//       fontFamily: fontType['Pjs-ExtraBold'],
//       color: 'rgb(255, 161, 0)',
//     },
//     titlePopuler: {
//       fontSize: 30,
//       marginRight: 20,
//       fontFamily: fontType['Pjs-ExtraBold'],
//       color: colors.black(),
//     },
//     settingContainer: {
//       marginLeft: 15,
//     },
//     listCategory: {
//       paddingVertical: 10,
//     },
//     listBlog: {
//       paddingVertical: 10,
//       gap: 10,
//     },
//     searchContainer: {
//       borderRadius: 20,
//       backgroundColor: 'rgb(240, 240, 240)',
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     searchButtonContainer: {
//       paddingLeft: 14,
//     },
//     icon: {
//       margin: 7,
//     },
//     divider: {
//       borderBottomColor: 'rgb(240, 240, 240)',
//       borderBottomWidth: 2,
//       width: '400',
//     },
//   });