import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardingItem = ({item}) => {
    const { width } = useWindowDimensions();
  return (
    <View>
      <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain'}]} />
    
        <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
        },
    description: {
        fontweight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});

export default OnboardingItem