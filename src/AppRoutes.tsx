import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { DefaultTheme, NavigationContainer, NavigationProp } from '@react-navigation/native';
import { Theme } from './shared/themes/Theme';


type TScreenDefinitions = {
    Home: undefined;
    Settings: undefined;
}

const Stack = createStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer theme={{
            ...DefaultTheme,
            fonts: {
                ...DefaultTheme.fonts,
                bold: {
                    fontFamily: Theme.fonts.interBold,
                    fontWeight: '700'
                },
                regular: {
                    fontFamily: Theme.fonts.interRegular,
                    fontWeight: '500'
                }
            },
            colors: {
                ...DefaultTheme.colors,
                background: Theme.colors.background,
                primary: Theme.colors.primary,
                text: Theme.colors.text,
                card: Theme.colors.divider,
            }
        }}>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export type TNavigationProps = NavigationProp<TScreenDefinitions>;