import { StyleSheet } from "react-native"
import Colors from "../../constant/Colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
        backgroundColor: Colors.lightGrey
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: Colors.darkGrey
    }
})