import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TNavigationProps } from "../../../shared/navigation/AppRoutes";
import { Theme } from "../../../shared/themes/Theme";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

export const HelpJourney = () => {
    const navigation = useNavigation<TNavigationProps>();
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selectedSubOptions, setSelectedSubOptions] = useState<string[]>([]);
    const [customReason, setCustomReason] = useState("");

    const options = [
        { id: "agressivo", label: "Está agressivo", icon: "cat" },
        { id: "areia", label: "Não usa a caixa de areia", icon: "paw" },
        { id: "adaptacao", label: "Adaptação com outro gato", icon: "cards-heart-outline" },
        { id: "assustado", label: "Está assustado", icon: "emoticon-sad-outline" },
        { id: "outro", label: "Outro", icon: "dots-horizontal" }
    ];

    const subOptionsMap: Record<string, string[]> = {
        'agressivo': [
            'Rosna',
            'Se esconde',
            'Bate no outro gato',
            'Outro'
        ],
        'areia': [
            'Faz apenas o xixi na caixa',
            'Joga muita areia para fora',
            'Demora muito tempo para usar',
            'Outro'
        ],
        'adaptacao': [
            'Brigas em excesso',
            'Agressões físicas',
            'Comportamento de medo',
            'Intimidação',
            'Outro'
        ],
        'assustado': [
            'Não come',
            'Não brinca',
            'Não bebe água'
        ]
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
    };

    const toggleSubOption = (option: string) => {
        setSelectedSubOptions(prev => 
            prev.includes(option) 
                ? prev.filter(o => o !== option)
                : [...prev, option]
        );
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



            {/* Conteúdo da tela */}
            {step === 1 ? (
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                        <Text style={styles.questionText}>O que está acontecendo com o seu gato?</Text>
                        
                        <View style={styles.optionsContainer}>
                            {options.map((option) => {
                                const isSelected = selectedOption === option.id;
                                return (
                                    <TouchableOpacity
                                        key={option.id}
                                        style={[
                                            styles.optionCard,
                                            isSelected && styles.optionCardSelected
                                        ]}
                                        onPress={() => handleSelect(option.id)}
                                        activeOpacity={0.7}
                                    >
                                        <View style={[
                                            styles.iconContainer,
                                            isSelected && styles.iconContainerSelected
                                        ]}>
                                            <MaterialCommunityIcons 
                                                name={option.icon as any} 
                                                size={24} 
                                                color={isSelected ? '#FFFFFF' : Theme.colors.primary} 
                                            />
                                        </View>
                                        <Text style={[
                                            styles.optionText,
                                            isSelected && styles.optionTextSelected
                                        ]}>
                                            {option.label}
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
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                        {selectedOption === 'outro' ? (
                            <>
                                <Text style={styles.questionText}>Descreva em detalhes sua necessidade:</Text>
                                <TextInput
                                    style={styles.textInput}
                                    multiline
                                    numberOfLines={4}
                                    placeholder="Digite aqui..."
                                    value={customReason}
                                    onChangeText={setCustomReason}
                                    textAlignVertical="top"
                                    placeholderTextColor="#94A3B8"
                                />
                            </>
                        ) : (
                            <>
                                <Text style={styles.questionText}>Selecione as opções que se aplicam:</Text>
                                <View style={styles.optionsContainer}>
                                    {(selectedOption ? subOptionsMap[selectedOption] : [])?.map((option) => {
                                        const isSelected = selectedSubOptions.includes(option);
                                        return (
                                            <TouchableOpacity
                                                key={option}
                                                style={[
                                                    styles.optionCard,
                                                    isSelected && styles.optionCardSelected
                                                ]}
                                                onPress={() => toggleSubOption(option)}
                                                activeOpacity={0.7}
                                            >
                                                <MaterialCommunityIcons 
                                                    name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"} 
                                                    size={24} 
                                                    color={isSelected ? Theme.colors.primary : '#94A3B8'} 
                                                />
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
                            </>
                        )}
                    </ScrollView>

                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={[
                                styles.continueButton,
                                (selectedOption === 'outro' ? !customReason.trim() : selectedSubOptions.length === 0) && styles.continueButtonDisabled
                            ]}
                            disabled={selectedOption === 'outro' ? !customReason.trim() : selectedSubOptions.length === 0}
                            onPress={() => { /* finalizar jornada */ }}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.continueButtonText}>finalizar</Text>
                            <MaterialIcons name="check" size={20} color="#FFFFFF" style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>
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
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(204, 102, 153, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainerSelected: {
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
    textInput: {
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        borderRadius: Theme.borderRadius.md,
        padding: Theme.spacing.lg,
        fontFamily: Theme.fonts.poppingsRegular,
        fontSize: Theme.fontSizes.body,
        color: '#475569',
        backgroundColor: '#F8FAFC',
        minHeight: 120,
    },
});
