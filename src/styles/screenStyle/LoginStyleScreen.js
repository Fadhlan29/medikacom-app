import { StyleSheet } from "react-native";
import Colors from '../../constant/Colors.js'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: Colors.lightGrey
    },
    appBar: {
        backgroundColor: Colors.lightGrey,
    },
    content: {
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'cover',
        width: 300,
        height: 220
    },
    text: {
        marginBottom: 15,
        fontSize: 18,
        color: Colors.darkGrey,
        fontFamily: 'Poppins-SemiBold',
        marginLeft: 10
    },
    form: {
        width: 350,
        padding: 10
    },
    inputWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 25
    },
    icon: {
        padding: 10,
    },
    textInput: {
        fontSize: 18,
        flex: 1
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 20
    }
})