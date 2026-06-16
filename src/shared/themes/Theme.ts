export const Theme = {
    colors: {
        primary: '#CC6699',
        secondary: '#91CDE5',
        background: '#FFFFFF',
        text: 'white',
        divider: '#373738'
    },
    fonts: {
        poppingsRegular: 'PoppinsRegular',
        poppingsBold: 'PoppingsBold'
    },
    fontSizes: {
        title: 32,
        titleLarge: 28,
        title2: 20,
        headerTitle: 22,
        body: 16,
        bodySecondary: 14,
        label: 12,
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
        xxl: 24,
        xxxl: 28,
        huge: 32,
        extraHuge: 36,
    },
    borderRadius: {
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
        xxl: 24,
        round: 9999,
    },
    shadows: {
        sm: {
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 3,
            elevation: 2,
        },
        md: {
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 8,
            elevation: 5,
        },
        primary: {
            shadowColor: '#CC6699',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 6,
        }
    },
    typography: {
        title: {
            fontFamily: 'PoppingsBold',
            fontSize: 32,
            color: '#1E293B',
        },
        titleLarge: {
            fontFamily: 'PoppingsBold',
            fontSize: 28,
            color: '#1E293B',
        },
        title2: {
            fontFamily: 'PoppingsBold',
            fontSize: 20,
            color: '#1E293B',
        },
        headerTitle: {
            fontFamily: 'PoppingsBold',
            fontSize: 22,
            color: '#FFFFFF',
            letterSpacing: -0.5,
        },
        body: {
            fontFamily: 'PoppinsRegular',
            fontSize: 16,
            color: '#475569',
        },
        bodySecondary: {
            fontFamily: 'PoppinsRegular',
            fontSize: 14,
            color: '#94A3B8',
        },
        label: {
            fontFamily: 'PoppinsRegular',
            fontSize: 12,
            color: '#94A3B8',
        }
    }
} as const;

export type AppTheme = typeof Theme;
