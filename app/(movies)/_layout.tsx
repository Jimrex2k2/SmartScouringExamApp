import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from './movie-list';

export default function TabLayout() {
    const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <MovieList></MovieList>
    </SafeAreaView>
  );
}
