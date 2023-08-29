import { StyleSheet } from "react-native"
import Colors from "../../constant/Colors"

export const styles = StyleSheet.create({
    container: {
        width: 180,
        marginRight: 15,
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        // borderWidth: 2,
        backgroundColor: 'rgba(4, 194, 7, 0.7)',
        opacity: 5,
        textAlign: 'center',
        marginTop: 5,
        paddingVertical: 2,
        paddingHorizontal: 8,
        marginBottom: 5,
        borderRadius: 5
    },
    textButton: {
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold'
    }
})