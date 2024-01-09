import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Listings from '../components/Listings'; // Dosya yolu gerektiği gibi ayarlanmalıdır
import MainHeader from '../components/MainHeader';
import {colors} from '../constants/theme';
function ExploreScreen() {
  // Örnek bir listings verisi oluşturuldu
  const sampleListings = [
    {
      id: 1,
      name: 'Jigger',
      medium_url: require('../assets/lounge.jpg'), // Yerel resmin dosya yolunu ekledik
      review_scores_rating: 97,
      room_type: 'Clubs',
      price: 100,
    },{
      id: 2,
      name: 'Sausalitos Stuttgart',
      medium_url: require('../assets/sausalitos-fingerfood.jpg'), // Yerel resmin dosya yolunu ekledik
      review_scores_rating: 90,
      room_type: 'Food',
      price: 200,
    },{
      id: 3,
      name: 'Stereokara',
      medium_url: require('../assets/stereokara.jpg'), // Yerel resmin dosya yolunu ekledik
      review_scores_rating: 88,
      room_type: 'Karaoke',
      price: 300,
    },{
      id: 4,
      name: 'Bliss',
      medium_url: require('../assets/bliss.png'), // Yerel resmin dosya yolunu ekledik
      review_scores_rating: 88,
      room_type: 'Coffe',
      price: 300,
    },{
      id: 5,
      name: 'Dormero Hotel',
      medium_url: require('../assets/Dormero-Hotel-Stuttgart-Exterior.jpeg'), // Yerel resmin dosya yolunu ekledik
      review_scores_rating: 88,
      room_type: 'Billardo',
      price: 300,
    },{
      id: 6,
      name: 'Pure Club',
      medium_url: require('../assets/pure-clubs.jpeg'), // Yerel resmin dosya yolunu ekledik
      review_scores_rating: 88,
      room_type: 'Clubs',
      price: 300,
    }
  ];
  
  

  return (
    <View style={{ flex: 1 }}>
      <MainHeader title="IN2NITE" />
      {/* Listings componentini kullanma */}
      <Listings listings={sampleListings} refresh={0} category="sample" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});
export default ExploreScreen;