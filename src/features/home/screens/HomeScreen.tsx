import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Theme } from "../../../shared/themes/Theme";
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { TNavigationProps } from "../../../shared/navigation/AppRoutes";
import { Header } from "../../../shared/components/Header";
import { ScreenLayout } from "../../../shared/components/ScreenLayout";

export const Home = () => {
    const navigation = useNavigation<TNavigationProps>();
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="light" backgroundColor={Theme.colors.primary} />
            
            {/* Parte superior: Fundo com a cor primary */}
            <Header />

            {/* No meio: fundo branco */}
            <ScreenLayout>
                {/* Primeira linha: O texto Oi, humano */}
                <Text style={styles.greetingText}>Oi, humano</Text>

                {/* Segunda linha: Um card vazio */}
                <View style={styles.emptyCard}>
                    <View style={styles.cardIconCircle}>
                        <MaterialIcons name="pets" size={24} color={Theme.colors.primary} />
                    </View>
                    <Text style={styles.cardTitle}>Nada por aqui ainda</Text>
                    <Text style={styles.cardDescription}>
                        Seu mural de atividades e atualizações aparecerá neste espaço.
                    </Text>
                </View>

                {/* Terceira linha: um botão "preciso de ajuda" */}
                <TouchableOpacity 
                    style={styles.helpButton} 
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate("HelpJourney")}
                >
                    <MaterialIcons name="healing" size={20} color="#FFFFFF" style={styles.buttonIcon} />
                    <Text style={styles.helpButtonText}>preciso de ajuda</Text>
                </TouchableOpacity>
            </ScreenLayout>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    greetingText: {
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
        marginBottom: Theme.spacing.huge,
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
    helpButton: {
        backgroundColor: Theme.colors.primary,
        borderRadius: Theme.borderRadius.lg,
        paddingVertical: Theme.spacing.lg,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: Theme.spacing.sm,
        ...Theme.shadows.primary,
        marginTop: 'auto',
    },
    buttonIcon: {
        marginRight: Theme.spacing.xs,
    },
    helpButtonText: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.body,
        color: '#FFFFFF',
        textTransform: 'lowercase',
    },
});
