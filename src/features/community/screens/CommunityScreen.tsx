import { View, Text, StyleSheet } from "react-native";
import { Header } from "../../../shared/components/Header";
import { Theme } from "../../../shared/themes/Theme";
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { ScreenLayout } from "../../../shared/components/ScreenLayout";

export const Community = () => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="light" backgroundColor={Theme.colors.primary} />
            <Header />

            {/* No meio: fundo branco */}
            <ScreenLayout>
                <Text style={styles.pageTitle}>Comunidade</Text>
                
                <View style={styles.emptyCard}>
                    <View style={styles.cardIconCircle}>
                        <MaterialIcons name="group" size={24} color={Theme.colors.primary} />
                    </View>
                    <Text style={styles.cardTitle}>Em construção</Text>
                    <Text style={styles.cardDescription}>
                        Em breve você poderá interagir com outros humanos gateiros por aqui.
                    </Text>
                </View>
            </ScreenLayout>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    pageTitle: {
        ...Theme.typography.titleLarge,
        marginBottom: Theme.spacing.xxl,
    },
    emptyCard: {
        backgroundColor: '#F8FAFC',
        borderRadius: Theme.borderRadius.xl,
        padding: Theme.spacing.huge,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        borderStyle: 'dashed',
        minHeight: 140,
    },
    cardIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(204, 102, 153, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Theme.spacing.lg,
    },
    cardTitle: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.body,
        color: '#475569',
        marginBottom: Theme.spacing.xs,
        textAlign: 'center',
    },
    cardDescription: {
        ...Theme.typography.bodySecondary,
        textAlign: 'center',
        lineHeight: 20,
    },
});
