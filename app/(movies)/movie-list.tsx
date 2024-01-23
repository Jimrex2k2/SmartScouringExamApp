import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CardsList from '../../components/card/card'

const MovieList = () => {
  return (
    <ScrollView style={{backgroundColor: '#222222' }}>
      <CardsList></CardsList>
    </ScrollView>
  );
};

export default MovieList;

