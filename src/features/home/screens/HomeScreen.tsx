import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Theme } from "../../../shared/themes/Theme";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { TNavigationProps } from "../../../shared/navigation/AppRoutes";
import { Header } from "../../../shared/components/Header";
import { ScreenLayout } from "../../../shared/components/ScreenLayout";

const TIPS = [
    {
        icon: "eye-outline",
        category: "Comportamento",
        tip: "Gatos se sentem mais seguros quando têm pelo menos 1 lugar alto para observar o ambiente.",
    },
    {
        icon: "food-variant",
        category: "Alimentação",
        tip: "Oferecer petiscos durante situações de estresse ajuda o gato a criar associações positivas.",
    },
    {
        icon: "paw-outline",
        category: "Socialização",
        tip: "Nunca force o contato. Deixe o gato dar o primeiro passo ao se aproximar de alguém novo.",
    },
    {
        icon: "home-outline",
        category: "Ambiente",
        tip: "Caixas de areia devem estar em locais calmos, longe de barulhos e de onde o gato come.",
    },
    {
        icon: "heart-pulse",
        category: "Saúde",
        tip: "Gatos escondem dor muito bem. Fique atento a mudanças no comportamento ou na rotina.",
    },
    {
        icon: "sleep",
        category: "Rotina",
        tip: "Manter horários fixos para brincar e alimentar reduz a ansiedade do gato.",
    },
    {
        icon: "cat",
        category: "Convivência",
        tip: "Em casas com múltiplos gatos, o ideal é ter N+1 caixas de areia, onde N é o número de gatos.",
    },
];

function getDailyTip() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return TIPS[dayOfYear % TIPS.length];
}

export const Home = () => {
    const navigation = useNavigation<TNavigationProps>();
    const tip = getDailyTip();

    return (
        <View style={styles.mainContainer}>
            <StatusBar style="light" backgroundColor={Theme.colors.primary} />
            
            <Header />

            <ScreenLayout>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.greetingText}>Oi, humano 👋</Text>

                    {/* Dica do Dia */}
                    <View style={styles.tipCard}>
                        <View style={styles.tipCardHeader}>
                            <View style={styles.tipBadge}>
                                <MaterialIcons name="wb-sunny" size={12} color="#FFFFFF" />
                                <Text style={styles.tipBadgeText}>Dica do dia</Text>
                            </View>
                            <Text style={styles.tipCategory}>{tip.category}</Text>
                        </View>

                        <View style={styles.tipBody}>
                            <View style={styles.tipIconWrap}>
                                <MaterialCommunityIcons
                                    name={tip.icon as any}
                                    size={28}
                                    color={Theme.colors.primary}
                                />
                            </View>
                            <Text style={styles.tipText}>{tip.tip}</Text>
                        </View>

                        <View style={styles.tipDivider} />

                        <View style={styles.tipFooter}>
                            <MaterialCommunityIcons name="calendar-today" size={14} color="#94A3B8" />
                            <Text style={styles.tipFooterText}>
                                Atualiza diariamente
                            </Text>
                        </View>
                    </View>

                    {/* Atalho Comunidade */}
                    <TouchableOpacity
                        style={styles.communityCard}
                        activeOpacity={0.85}
                        onPress={() => navigation.navigate("Comunidade")}
                    >
                        <View style={styles.communityCardLeft}>
                            <View style={styles.communityIconWrap}>
                                <MaterialIcons name="group" size={24} color={Theme.colors.secondary} />
                            </View>
                            <View>
                                <Text style={styles.communityCardTitle}>Comunidade</Text>
                                <Text style={styles.communityCardSub}>Ver o que outros gateiros estão vivendo</Text>
                            </View>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={14} color="#94A3B8" />
                    </TouchableOpacity>

                    {/* Botão preciso de ajuda */}
                    <TouchableOpacity
                        style={styles.helpButton}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate("HelpJourney")}
                    >
                        <MaterialIcons name="healing" size={20} color="#FFFFFF" />
                        <Text style={styles.helpButtonText}>preciso de ajuda</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScreenLayout>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: Theme.spacing.xl,
    },
    greetingText: {
        ...Theme.typography.titleLarge,
        marginBottom: Theme.spacing.xl,
    },

    // Tip card
    tipCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: Theme.borderRadius.xl,
        borderWidth: 1,
        borderColor: '#F1E6F0',
        marginBottom: Theme.spacing.xl,
        overflow: 'hidden',
        ...Theme.shadows.sm,
    },
    tipCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(204, 102, 153, 0.06)',
        paddingHorizontal: Theme.spacing.lg,
        paddingVertical: Theme.spacing.sm,
    },
    tipBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Theme.spacing.xs,
        backgroundColor: Theme.colors.primary,
        paddingHorizontal: Theme.spacing.sm,
        paddingVertical: 3,
        borderRadius: Theme.borderRadius.round,
    },
    tipBadgeText: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: 10,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    tipCategory: {
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.label,
        color: Theme.colors.primary,
    },
    tipBody: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: Theme.spacing.md,
        padding: Theme.spacing.lg,
    },
    tipIconWrap: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(204, 102, 153, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
    tipText: {
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.body,
        color: '#334155',
        lineHeight: 22,
        flex: 1,
    },
    tipDivider: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginHorizontal: Theme.spacing.lg,
    },
    tipFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Theme.spacing.xs,
        paddingHorizontal: Theme.spacing.lg,
        paddingVertical: Theme.spacing.sm,
    },
    tipFooterText: {
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.label,
        color: '#94A3B8',
    },

    // Community card
    communityCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: Theme.borderRadius.lg,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: Theme.spacing.md,
        marginBottom: Theme.spacing.xl,
        ...Theme.shadows.sm,
    },
    communityCardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Theme.spacing.md,
        flex: 1,
    },
    communityIconWrap: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(145, 205, 229, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    communityCardTitle: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.body,
        color: '#1E293B',
    },
    communityCardSub: {
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.label,
        color: '#94A3B8',
        marginTop: 2,
    },

    // Help button
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
    helpButtonText: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.body,
        color: '#FFFFFF',
        textTransform: 'lowercase',
    },
});
