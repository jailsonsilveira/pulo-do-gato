import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TNavigationProps } from "../AppRoutes";
import { Theme } from "../shared/themes/Theme";
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState, useMemo, useCallback } from "react";

export const Home = () => {
   


    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate("Settings")}>
                <MaterialIcons name="settings" size={24} color={Theme.colors.divider} />
            </TouchableOpacity>
         
        </View>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        gap: 36,
        justifyContent: 'center',
        flex: 1,
        padding: 16,
    },
    settingsButton: {
        alignSelf: 'flex-end',
    }
});
