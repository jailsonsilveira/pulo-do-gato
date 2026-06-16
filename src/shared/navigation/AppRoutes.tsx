import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '../../features/home/screens/HomeScreen';
import { Community } from '../../features/community/screens/CommunityScreen';
import { Profile } from '../../features/profile/screens/ProfileScreen';
import { HelpJourney } from '../../features/help-journey/screens/HelpJourneyScreen';
import { Theme } from '../themes/Theme';



type TTabDefinitions = {
    Inicio: undefined;
    Comunidade: undefined;
    Perfil: undefined;
}

export type TStackDefinitions = {
    HomeTab: undefined;
    HelpJourney: undefined;
}

const Stack = createStackNavigator<TStackDefinitions>();
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
                    height: 84,
                    paddingTop: Theme.spacing.sm,
                    paddingBottom: Theme.spacing.md,
                },
                tabBarLabelStyle: {
                    fontFamily: Theme.fonts.poppingsRegular,
                    fontSize: Theme.fontSizes.label,
                    marginTop: Theme.spacing.xs,
                }
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" color={color} size={28} />
                    )
                }}
            />
            <Tab.Screen
                name="Comunidade"
                component={Community}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="group" color={color} size={28} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="person" color={color} size={28} />
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
                <Stack.Screen name="HelpJourney" component={HelpJourney} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export type TNavigationProps = NavigationProp<TStackDefinitions & TTabDefinitions>;
