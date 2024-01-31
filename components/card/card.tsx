import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import styles from './movie-card.scss';

const Card = ({ id, title, image, description }) => {
  return (
    <TouchableOpacity
    style={styles.card}
    onPress={() => router.push(`movie-detail/${id}`)}
    >
        <Image source={require('../../assets/images/sample-poster.png')} style={styles.cardImage} />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
        </View>
    </TouchableOpacity>

  );
};

export default Card;