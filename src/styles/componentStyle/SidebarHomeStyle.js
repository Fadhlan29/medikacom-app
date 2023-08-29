import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sidebar: {
        width: '70%',
        // flex: 1,
        height: 500,
        backgroundColor: 'rgba( 0, 0, 0, 0.8)',
        position: 'absolute',
        zIndex: 999,
        top: 70,
        left: 0,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center' 
    },
    textSidebar: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        marginTop: 10
    },
    avatar: {
        marginTop: 30
    }
})