import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Listings = ({ listings: items, refresh, category }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (refresh) {
      // Eğer refresh varsa burada scroll işlemleri gerçekleştirilebilir.
    }
  }, [refresh]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow = ({ item }) => (
    <TouchableOpacity style={{marginBottom:10}} onPress={() => {}}>
      <View style={styles.listing}>
        <View style={styles.imageContainer}>
          <Image source={item.medium_url} style={styles.image} />
          <Ionicons name="heart-outline" size={24} color="#000" style={styles.icon} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="star" size={16} />
            <Text style={styles.rating}>{item.review_scores_rating / 20}</Text>
          </View>
        </View>
        <Text style={styles.roomType}>{item.room_type}</Text>
        <Text style={styles.price}>€ {item.price} / Entrance fee</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={loading ? [] : items}
        renderItem={renderRow}
        keyExtractor={(item) => item.id.toString()}
        // ListHeaderComponent={<Text style={styles.info}>{items.length} homes</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  imageContainer: {
    position: 'relative',
    width: '100%', // Assuming the image takes the full width of its container
    aspectRatio: 16 / 9, // Assuming a standard aspect ratio for images
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icon: {
    transform: [{ translateY: -2 }],
  },
  name: {
    fontSize: 16,
  },
  rating: {
    marginLeft: 4,
  },
  roomType: {
    marginTop: 4,
  },
  price: {
    marginTop: 4,
  },
  info: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});

export default Listings;
