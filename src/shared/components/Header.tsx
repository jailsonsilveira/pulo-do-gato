import { View, Text, StyleSheet, Image } from "react-native";
import { Theme } from "../themes/Theme";

export const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerTitleContainer}>
                <Image 
                    source={require('../../../assets/logo-dark.png')} 
                    style={styles.logo} 
                    resizeMode="contain"
                />
                <Text style={styles.headerTitle}>Pulo do Gato</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Theme.spacing.xl,
        paddingTop: Theme.spacing.lg,
        paddingBottom: Theme.spacing.xl,
        borderBottomLeftRadius: Theme.borderRadius.xxl,
        borderBottomRightRadius: Theme.borderRadius.xxl,
        ...Theme.shadows.md,
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Theme.spacing.md,
    },
    logo: {
        width: 36,
        height: 36,
        tintColor: '#FFFFFF',
    },
    headerTitle: {
        ...Theme.typography.headerTitle,
    },
});
