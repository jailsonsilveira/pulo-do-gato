import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from './pages/Home';
import { Community } from './pages/Community';
import { Profile } from './pages/Profile';
import { Theme } from './shared/themes/Theme';


type TTabDefinitions = {
    Inicio: undefined;
    Comunidade: undefined;
    Perfil: undefined;
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<TTabDefinitions>();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Theme.colors.primary,
                tabBarInactiveTintColor: Theme.colors.divider,
                tabBarStyle: {
                    backgroundColor: Theme.colors.background,
                    borderTopColor: Theme.colors.divider,
                }
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Comunidade"
                component={Community}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="group" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export function AppRoutes() {
    return (
        <NavigationContainer theme={{
            ...DefaultTheme,
            fonts: {
                ...DefaultTheme.fonts,
                bold: {
                    fontFamily: Theme.fonts.poppingsBold,
                    fontWeight: '700'
                },
                regular: {
                    fontFamily: Theme.fonts.poppingsRegular,
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
            <Stack.Navigator initialRouteName='HomeTab' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeTab" component={TabRoutes} />
                {/* Outras telas como Settings seriam adicionadas aqui */}
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export type TNavigationProps = NavigationProp<TTabDefinitions>;
