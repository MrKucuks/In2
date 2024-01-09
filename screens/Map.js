import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import MainHeader from '../components/MainHeader';
import {colors} from '../constants/theme';
// npx expo install react-native-maps
// npx expo install expo-sharing
// npx expo install expo-file-system

let locationsOfInterest = [
  {
    title: "Merci Shisha Lounge Stuttgart",
    location: {
      latitude: 48.72363359692721,
      longitude: 9.146309916591076
    },
    description: "Merci Shisha Lounge Stuttgart",
    pinColor: '#0000ff'
  },
  {
    title: "Society 34 Shisha Lounge",
    location: {
      latitude: 48.82981853595958,
      longitude: 9.17057752767979
    },
    description: "Society 34 Shisha Lounge",
    pinColor: '#0000ff'
  },
  {
    title: "DAmici - Cafè•Shisha•Lounge",
    location: {
      latitude: 48.83063167659137,
      longitude: 9.232389173291448
    },
    description: "DAmici - Cafè•Shisha•Lounge",
    pinColor: '#0000ff'
  },
  {
    title: "Fellas Stuttgart",
    location: {
      latitude: 48.78233110813998,
      longitude: 9.15911862626614
    },
    description: "Fellas Stuttgart",
    pinColor: '#0000ff'
  },
  {
    title: "KALA - Bar / Lounge / Club",
    location: {
      latitude: 48.777658049252636,
      longitude: 9.173510526990151
    },
    description: "KALA - Bar / Lounge / Club",
  },
  {
    title: "Ehl-i Keyf Café",
    location: {
      latitude: 48.791387603273186,
      longitude: 9.199153495214691
    },
    description: "Ehl-i Keyf Café",
  }
];



export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: 148.11,
    latitude: -26.85
  });
  const mapRef = useRef();

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker 
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          pinColor={item.pinColor}
        />
      )
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({ width: 300, height: 300, result: 'base64'});
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, { encoding: FileSystem.EncodingType.Base64 });
    await shareAsync(uri);
  };

  return (
    <View style={styles.container}>
      <MainHeader title="IN2NITE" />
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef} 
        style={styles.map}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 48.7758, // Stuttgart's latitude
          longitude: 9.1829, // Stuttgart's longitude
          latitudeDelta: 0.5, // Adjust the latitudeDelta and longitudeDelta values according to the desired zoom level
          longitudeDelta: 0.5 // This is a rough estimate; you can adjust it for your preferred initial map zoom
        }}
      >
        {showLocationsOfInterest()}
        
        {/* <Text style={styles.mapOverlay}>Longitude: {draggableMarkerCoord.longitude}, latitude: {draggableMarkerCoord.latitude}</Text> */}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  map: {
    width:'100%',
    height: '100%'
  },
  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center"
  }
});
