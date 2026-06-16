import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Header } from "../../../shared/components/Header";
import { Theme } from "../../../shared/themes/Theme";
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

export const Community = () => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="light" backgroundColor={Theme.colors.primary} />
            <Header />

            {/* No meio: fundo branco */}
            <ScrollView 
                style={styles.contentContainer} 
                contentContainerStyle={styles.contentScroll}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.pageTitle}>Comunidade</Text>
                
                <View style={styles.emptyCard}>
                    <View style={styles.cardIconCircle}>
                        <MaterialIcons name="group" size={32} color={Theme.colors.primary} />
                    </View>
                    <Text style={styles.cardTitle}>Em construção</Text>
                    <Text style={styles.cardDescription}>
                        Em breve você poderá interagir com outros humanos gateiros por aqui.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },

    contentContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    contentScroll: {
        paddingHorizontal: Theme.spacing.xxl,
        paddingTop: Theme.spacing.xxxl,
        paddingBottom: Theme.spacing.extraHuge,
        flexGrow: 1,
    },
    pageTitle: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.titleLarge,
        color: '#1E293B',
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
        minHeight: 180,
    },
    cardIconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
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
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.bodySecondary,
        color: '#94A3B8',
        textAlign: 'center',
        lineHeight: 20,
    },
});
