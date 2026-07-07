import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { AppRoutes } from './shared/navigation/AppRoutes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from './shared/themes/Theme';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();


export function App() {

  const [loaded, error] = useFonts({
      PoppinsRegular: Poppins_400Regular,
      PoppingsBold: Poppins_700Bold,
      ...MaterialIcons.font,
      ...MaterialCommunityIcons.font,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide();
    }

  }, [loaded, error]);


 if(!loaded && !error) {
    return null;
 }
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.background }}>
        <StatusBar style='light' />
        <AppRoutes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
  
}

