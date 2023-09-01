import { StyleSheet } from "react-native";
import Colors from "../../constant/Colors"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        width: '70%',
    },
    content: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        alignItems: 'center',
    },
    icon: {
        alignSelf: 'flex-end',
        padding: 15
    },
    logoUser: {
        backgroundColor: Colors.lightGrey
    },
    btnLogin: {
        borderWidth: 2,
        paddingVertical: 4,
        paddingHorizontal: 15,
        borderColor: Colors.darkGrey,
        borderRadius: 10,
        marginTop: 20
    },
    textBtnLogin: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.darkGrey
    }
})