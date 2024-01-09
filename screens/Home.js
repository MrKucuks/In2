import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {colors} from '../constants/theme';

import {PLACES, TOP_PLACES} from '../data';

import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="IN2NITE" />
      <ScreenHeader mainTitle="Let's Have Fun" secondTitle="Discover events in your area" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;