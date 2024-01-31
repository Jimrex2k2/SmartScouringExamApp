import * as React from 'react';
import { ScrollView } from 'react-native';
import CardsList from '../../components/card/cardlist'
import styles from './movie-list.scss'

const MovieList = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <CardsList></CardsList>
    </ScrollView>
  );
};

export default MovieList;

