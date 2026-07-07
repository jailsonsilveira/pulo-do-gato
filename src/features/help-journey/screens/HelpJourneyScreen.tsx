import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TNavigationProps } from "../../../shared/navigation/AppRoutes";
import { Theme } from "../../../shared/themes/Theme";
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

export const HelpJourney = () => {
    const navigation = useNavigation<TNavigationProps>();
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = [
        "Está agressivo",
        "Não usa a caixa de areia",
        "Adaptação com outro gato",
        "Está assustado",
        "Outro"
    ];

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleContinue = () => {
        if (step === 1 && selectedOption) {
            setStep(2);
        }
    };

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.mainContainer}>
            <StatusBar style="dark" backgroundColor="#FFFFFF" />
            
            {/* Parte superior: fundo branco */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.7}>
                    <MaterialIcons name="arrow-back" size={24} color={Theme.colors.primary} />
                </TouchableOpacity>
                
                {/* Logo com a cor primary e ao lado o nome Pulo do Gato */}
                <View style={styles.headerTitleContainer}>
                    <Image 
                        source={require('../../../../assets/logo-dark.png')} 
                        style={styles.logo} 
                        resizeMode="contain"
                    />
                    <Text style={styles.headerTitle}>Pulo do Gato</Text>
                </View>
                
                <View style={styles.placeholder} />
            </View>

            {/* Middle Step Progress Indicator */}
            <View style={styles.progressContainer}>
                <View style={styles.stepWrapper}>
                    <View style={[
                        styles.stepCircle, 
                        step >= 1 ? styles.stepCircleActive : styles.stepCircleInactive
                    ]}>
                        {step > 1 ? (
                            <MaterialIcons name="check" size={18} color="#FFFFFF" />
                        ) : (
                            <Text style={styles.stepNumberActive}>1</Text>
                        )}
                    </View>
                    <Text style={[styles.stepLabel, step >= 1 ? styles.stepLabelActive : styles.stepLabelInactive]}>
                        Sintoma
                    </Text>
                </View>

                <View style={[
                    styles.progressBarLine, 
                    step >= 2 ? styles.progressBarLineActive : styles.progressBarLineInactive
                ]} />

                <View style={styles.stepWrapper}>
                    <View style={[
                        styles.stepCircle, 
                        step >= 2 ? styles.stepCircleActive : styles.stepCircleInactive
                    ]}>
                        <Text style={step >= 2 ? styles.stepNumberActive : styles.stepNumberInactive}>2</Text>
                    </View>
                    <Text style={[styles.stepLabel, step >= 2 ? styles.stepLabelActive : styles.stepLabelInactive]}>
                        Solução
                    </Text>
                </View>
            </View>

            {/* Conteúdo da tela */}
            {step === 1 ? (
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                        <Text style={styles.questionText}>O que está acontecendo com o seu gato?</Text>
                        
                        <View style={styles.optionsContainer}>
                            {options.map((option) => {
                                const isSelected = selectedOption === option;
                                return (
                                    <TouchableOpacity
                                        key={option}
                                        style={[
                                            styles.optionCard,
                                            isSelected && styles.optionCardSelected
                                        ]}
                                        onPress={() => handleSelect(option)}
                                        activeOpacity={0.7}
                                    >
                                        <View style={[
                                            styles.radioOuter,
                                            isSelected && styles.radioOuterSelected
                                        ]}>
                                            {isSelected && <View style={styles.radioInner} />}
                                        </View>
                                        <Text style={[
                                            styles.optionText,
                                            isSelected && styles.optionTextSelected
                                        ]}>
                                            {option}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>

                    {/* Botão continuar na parte inferior */}
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={[
                                styles.continueButton,
                                !selectedOption && styles.continueButtonDisabled
                            ]}
                            disabled={!selectedOption}
                            onPress={handleContinue}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.continueButtonText}>continuar</Text>
                            <MaterialIcons name="arrow-forward" size={20} color="#FFFFFF" style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.contentStep2}>
                    <Text style={styles.step2Text}>continua</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Theme.spacing.lg,
        paddingTop: Theme.spacing.lg,
        paddingBottom: Theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    backButton: {
        padding: Theme.spacing.xs,
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Theme.spacing.sm,
    },
    logo: {
        width: 28,
        height: 28,
        tintColor: Theme.colors.primary,
    },
    headerTitle: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: 18,
        color: Theme.colors.primary,
    },
    placeholder: {
        width: 32,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Theme.spacing.lg,
        backgroundColor: '#F8FAFC',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    stepWrapper: {
        alignItems: 'center',
        gap: Theme.spacing.xs,
    },
    stepCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepCircleActive: {
        backgroundColor: Theme.colors.primary,
    },
    stepCircleInactive: {
        backgroundColor: '#E2E8F0',
    },
    stepNumberActive: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.body,
        color: '#FFFFFF',
    },
    stepNumberInactive: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.body,
        color: '#94A3B8',
    },
    stepLabel: {
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.label,
    },
    stepLabelActive: {
        color: Theme.colors.primary,
        fontFamily: Theme.fonts.poppingsBold,
    },
    stepLabelInactive: {
        color: '#94A3B8',
    },
    progressBarLine: {
        width: 60,
        height: 3,
        marginHorizontal: Theme.spacing.sm,
        marginTop: -16,
    },
    progressBarLineActive: {
        backgroundColor: Theme.colors.primary,
    },
    progressBarLineInactive: {
        backgroundColor: '#E2E8F0',
    },
    content: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingHorizontal: Theme.spacing.xxl,
        paddingTop: Theme.spacing.xl,
        paddingBottom: Theme.spacing.xxl,
    },
    questionText: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.headerTitle,
        color: '#1E293B',
        marginBottom: Theme.spacing.xl,
    },
    optionsContainer: {
        gap: Theme.spacing.md,
    },
    optionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Theme.spacing.lg,
        borderRadius: Theme.borderRadius.md,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',
        gap: Theme.spacing.md,
    },
    optionCardSelected: {
        borderColor: Theme.colors.primary,
        backgroundColor: 'rgba(204, 102, 153, 0.04)',
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#94A3B8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioOuterSelected: {
        borderColor: Theme.colors.primary,
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Theme.colors.primary,
    },
    optionText: {
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.body,
        color: '#475569',
        flex: 1,
    },
    optionTextSelected: {
        fontFamily: Theme.fonts.poppingsBold,
        color: '#1E293B',
    },
    footer: {
        padding: Theme.spacing.xl,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        backgroundColor: '#FFFFFF',
    },
    continueButton: {
        backgroundColor: Theme.colors.primary,
        borderRadius: Theme.borderRadius.md,
        paddingVertical: Theme.spacing.lg,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: Theme.spacing.sm,
        ...Theme.shadows.primary,
    },
    continueButtonDisabled: {
        backgroundColor: '#CBD5E1',
        shadowOpacity: 0,
        elevation: 0,
    },
    continueButtonText: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.body,
        color: '#FFFFFF',
    },
    buttonIcon: {
        marginLeft: Theme.spacing.xs,
    },
    contentStep2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: Theme.spacing.xxl,
    },
    step2Text: {
        fontFamily: Theme.fonts.poppingsBold,
        fontSize: Theme.fontSizes.title,
        color: '#1E293B',
    },
});
