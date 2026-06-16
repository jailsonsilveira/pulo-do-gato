import React from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../themes/Theme';

interface ScreenLayoutProps {
    children: React.ReactNode;
    contentContainerStyle?: ViewStyle;
}

export const ScreenLayout = ({ children, contentContainerStyle }: ScreenLayoutProps) => {
    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={[styles.contentScroll, contentContainerStyle]}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    contentScroll: {
        paddingHorizontal: Theme.spacing.xxl,
        paddingTop: Theme.spacing.xxxl,
        paddingBottom: Theme.spacing.extraHuge,
        flexGrow: 1,
    },
});
