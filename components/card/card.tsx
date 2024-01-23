import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'transparent',
      borderRadius: 5,
      marginVertical: 10,
      elevation: 2,
      flexBasis: 150,
      flexGrow: 2,
      margin: 5
    },
    cardImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    cardContent: {
      paddingHorizontal: 5,
      color: '#fff'
    },
    cardTitle: {
      color: '#f0ffff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    cardDescription: {
      color: '#aaaaaa',
      fontSize: 9,
      fontWeight: 'lighter',
    },
    cardContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  });

const Card = ({ id, title, image, description }) => {
  return (
    <TouchableOpacity
    style={styles.card}
    onPress={() => router.push(`movie-detail/${id}`)}
    >
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
        </View>
    </TouchableOpacity>

  );
};

const cardsData = [
    {
        id: 1,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
        id: 2,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
        id: 3,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
        id: 4,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
        id: 5,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
        id: 6,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
        id: 7,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
        id: 8,
        title: 'Sample Title',
        image: '../../assets/images/sample-poster.png',
        description: 'description'
    },
    {
      id: 9,
      title: 'Sample Title',
      image: '../../assets/images/sample-poster.png',
      description: 'description'
    },
    {
      id: 10,
      title: 'Sample Title',
      image: '../../assets/images/sample-poster.png',
      description: 'description'
    },
]

const CardList = () => {
  return (
    <View style={styles.cardContainer}>
      {
        cardsData.map((card) => {
          return (<Card key={card.id} {...card} />);
        })
      }
    </View>
  );
};

export default CardList;