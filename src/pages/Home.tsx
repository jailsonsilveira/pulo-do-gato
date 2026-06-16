import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Theme } from "../shared/themes/Theme";
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

export const Home = () => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="light" backgroundColor={Theme.colors.primary} />
            
            {/* Parte superior: Fundo com a cor primary */}
            <View style={styles.header}>
                {/* Na linha: logo white e o título Pulo do Gato */}
                <View style={styles.headerTitleContainer}>
                    <Image 
                        source={require('../../assets/logo-dark.png')} 
                        style={styles.logo} 
                        resizeMode="contain"
                    />
                    <Text style={styles.headerTitle}>Pulo do Gato</Text>
                </View>
            </View>

            {/* No meio: fundo branco */}
            <ScrollView 
                style={styles.contentContainer} 
                contentContainerStyle={styles.contentScroll}
                showsVerticalScrollIndicator={false}
            >
                {/* Primeira linha: O texto Oi, humano */}
                <Text style={styles.greetingText}>Oi, humano</Text>

                {/* Segunda linha: Um card vazio */}
                <View style={styles.emptyCard}>
                    <View style={styles.cardIconCircle}>
                        <MaterialIcons name="pets" size={32} color={Theme.colors.primary} />
                    </View>
                    <Text style={styles.cardTitle}>Nada por aqui ainda</Text>
                    <Text style={styles.cardDescription}>
                        Seu mural de atividades e atualizações aparecerá neste espaço.
                    </Text>
                </View>

                {/* Terceira linha: um botão "preciso de ajuda" */}
                <TouchableOpacity style={styles.helpButton} activeOpacity={0.9}>
                    <MaterialIcons name="healing" size={20} color="#FFFFFF" style={styles.buttonIcon} />
                    <Text style={styles.helpButtonText}>preciso de ajuda</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    header: {
        backgroundColor: Theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Theme.spacing.xxl,
        paddingTop: Theme.spacing.xxl,
        paddingBottom: Theme.spacing.xxl,
        borderBottomLeftRadius: Theme.borderRadius.xxl,
        borderBottomRightRadius: Theme.borderRadius.xxl,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 6,
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
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.headerTitle,
        color: '#FFFFFF',
        letterSpacing: -0.5,
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
    greetingText: {
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
        marginBottom: Theme.spacing.huge,
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
    helpButton: {
        backgroundColor: Theme.colors.primary,
        borderRadius: Theme.borderRadius.lg,
        paddingVertical: Theme.spacing.lg,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: Theme.spacing.sm,
        shadowColor: Theme.colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
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
