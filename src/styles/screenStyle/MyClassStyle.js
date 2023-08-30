import { StyleSheet } from "react-native"
import Colors from "../../constant/Colors"

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Colors.lightGrey
    },
    scrollView: {
        flexGrow: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: Colors.lightGrey
    },
    header: {
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: Colors.darkGrey
    },
    class: {
        fontSize: 20,
        fontFamily: 'Poppins-BoldItalic',
        color: Colors.grey,
        marginTop: 15,
        borderTopWidth: 1
    },
    classSecond: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: Colors.darkGrey
    },
    content: {
        width: '100%'
    },
    lessonCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'Poppins-SemiBold',
        width: 200
    },
    cardIcon: {
        backgroundColor: '#dedede',
        padding: 8,
        borderRadius: 10
    }
})  