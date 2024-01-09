import { Text, View, StyleSheet,Platform } from 'react-native';
import MainHeader from '../components/MainHeader';
import {colors} from '../constants/theme';
import CustomListview from '../components/CustomListview'
function FriendsScreen() {
  const list = [
      {
        key: 1, title: 'Garden Party',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://eventportal.imgix.net/public/uploads/idDRsqhXoGZrfMkdcxIcp8E2n58gi7ylkXwTkQzc.jpg?ar=5%3A3&auto=compress%2Cformat&fit=crop'
      },
      {
        key: 2,
        title: 'Green Party',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/dd/6a/ec/lounge.jpg?w=500&h=400&s=1'
      },
      {
        key: 3, title: 'One Night Party',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://1337.camp/media/pages/buchung/lan-party/8e3e924adc-1658006422/hero-image-1440x.jpg'
      },
      {
        key: 4,
        title: 'Two Nigh Party',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNotSEJ9Tm8R1TvorqGAQSBt66Eo5e_wXk6TvFs_NuKlAQzGbgTRrY5-uwGfi6NVyXuSc&usqp=CAU'
      },
      {
        key: 5, title: 'Morning Party',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://eventportal.imgix.net/public/uploads/cjfsb1xKj024TY03XV0oKtLw4L7vV2GruVQwaxte.jpg?ar=5%3A3&auto=compress%2Cformat&fit=crop'
      },
      {
        key: 6,
        title: 'Baby Shower',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/61/d0/0e/pure-club.jpg?w=500&h=400&s=1'
      },
      {
        key: 7, title: 'Stand Up',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/98/26/a1/photo3jpg.jpg?w=2200&h=-1&s=1'
      },
      {
        key: 8,
        title: 'Karaoke',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4a/d7/14/stereokara.jpg?w=1400&h=-1&s=1'
      },
      {
        key: 9, title: 'Hookah',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9b/02/ba/spielsaal-2.jpg?w=2400&h=-1&s=1'
      },
      {
        key: 10,
        title: 'Full Party',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/48/3b/92/perfekt-fur-einen-afterwork.jpg?w=2200&h=-1&s=1'
      },
    ];
    return (
      <View style={styles.container} >
        <MainHeader title="IN2NITE" />
        <CustomListview
          itemList={list}
        />
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});
export default FriendsScreen;