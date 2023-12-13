import React, {useEffect, useState, useCallback, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar,} from 'react-native';
import {Edit, ArrowCircleLeft, InfoCircle, LogoutCurve, Setting2, MessageQuestion, Logout} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import {ProfileData} from '../../../data';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';
import {formatNumber} from '../../utils/formatNumber';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {formatDate} from '../../utils/formatDate';
import ActionSheet from 'react-native-actions-sheet';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const user = auth().currentUser;
    const fetchBlogData = () => {
      try {
        if (user) {
          const userId = user.uid;
          const blogCollection = firestore().collection('blog');
          const query = blogCollection.where('authorId', '==', userId);
          const unsubscribeBlog = query.onSnapshot(querySnapshot => {
            const blogs = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }));
            setBlogData(blogs);
            setLoading(false);
          });

          return () => {
            unsubscribeBlog();
          };
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    const fetchProfileData = () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userRef = firestore().collection('users').doc(userId);

          const unsubscribeProfile = userRef.onSnapshot(doc => {
            if (doc.exists) {
              const userData = doc.data();
              setProfileData(userData);
              fetchBlogData();
            } else {
              console.error('Dokumen pengguna tidak ditemukan.');
            }
          });

          return () => {
            unsubscribeProfile();
          };
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchBlogData();
    fetchProfileData();
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
    return (
      <View style={styles.container}>
        <StatusBar translucent = {false} backgroundColor={ colors.green()}/>
        <View style={styles.header}>
          <TouchableOpacity>
            <ArrowCircleLeft color={'rgb(22, 179, 179)'} variant="Linear" size={28} />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={profile.cardProfile}>
          <View style={{gap: 5, alignItems: 'center', flex: 1}}>
            <Image style={profile.pic} source={ProfileData.profilePict} />
              <Text style={profile.name}>{profileData?.fullName}</Text>
            </View>
          </View>
            <TouchableOpacity style={profile.editProfile}>
              <Text style={profile.textEdit}>Edit Profile</Text>
            </TouchableOpacity>
          <View style={styles.cardItem}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <MessageQuestion color={'rgba(22, 179, 179, 0.8)'} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>Help & FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <InfoCircle color={'rgba(22, 179, 179, 0.8)'} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <Setting2 color={'rgba(22, 179, 179, 0.8)'} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>Pengaturan</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
              style={styles.floatingButton}
              onPress={openActionSheet}>
              <Logout color={colors.white()} variant="Linear" size={20} />
          </TouchableOpacity>
        </View>
        <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleLogout}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
        {/* <MenuBar /> */}
      </View>
    );
  };
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 250, 0.2)',
  },
    cardContainer: {
      flex: 1,
      backgroundColor: 'rgba(22, 179, 179, 0.1)',
      borderRadius: 10,
      margin: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgba(22, 179, 179, 0.2)',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    title: {
      fontSize: 22,
      fontFamily: fontType['Pjs-Medium'],
      color: 'rgb(22, 179, 179)',
      marginLeft: 110,
    },
    cardItem: {
      paddingHorizontal: 22,
      paddingVertical: 16,
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 12,
    },
      floatingButton: {
    backgroundColor: colors.green(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.green(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  });
  const profile = StyleSheet.create({
    pic: {
      alignItems :'center',
      width: 110,
      height: 110,
      borderRadius: 100,
    },
    title: {
      fontSize: 22,
      fontFamily: fontType['Pjs-Bold'],
      color: 'rgb(148, 108, 82)',
    },
    text: {
      fontSize: 16,
      fontFamily: fontType['Pjs-SemiBold'],
      color: 'rgb(22, 179, 179)',
    },
    cardProfile: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingTop: 28,
      paddingBottom: 12,
    },
    name: {
      fontSize: 20,
      fontFamily: fontType['Pjs-Bold'],
      color: colors.green(),
    },
    info: {
      fontSize: 12,
      fontFamily: fontType['Pjs-Medium'],
      color: 'rgba(22, 179, 179, 0.7)',
    },
    editProfile: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(22, 179, 179)',
      paddingVertical: 5,
      marginHorizontal: 16,
      marginBottom: 16,
      borderRadius: 12,
    },
    textEdit: {
      fontSize: 18,
      fontFamily: fontType['Pjs-Bold'],
      color: 'rgb(255, 255, 255)',
    },
  });