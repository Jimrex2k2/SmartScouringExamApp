import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, Image, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/Feather'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(movies)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(movies)"
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitle: () => null,
            headerLeft: () => (
              <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 30, height: 30, marginLeft: 5 }}
              />
            ),
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 10 }} >
                <Icon name="user" size={40} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen 
          name="movieDetail/[id]"
          options={{
            headerTitle: () => null,
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
