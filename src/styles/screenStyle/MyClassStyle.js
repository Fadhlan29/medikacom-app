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
        // paddingHorizontal: 20,
        backgroundColor: Colors.lightGrey,
        marginBottom: 100
    },
    header: {
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: Colors.primary,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    titleHeader: {
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        color: Colors.white
    },
    inputWrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 10 
    },
    inputIcon: {
        padding: 12
    },
    inputText: {
        width: '100%',
        fontSize: 17,
        paddingVertical: 8,
        paddingLeft: 0
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.darkGrey,
        marginTop: 10,
    },
    classSecond: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: Colors.darkGrey
    },
    content: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 15,
        marginBottom: 110,
    },
    titleLesson: {
        fontSize: 15,
        color: Colors.darkGrey,
        fontFamily: 'Poppins-Regular'
    },
    lessonCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: 'Poppins-SemiBold',
        width: 200,
        color: Colors.darkGrey
    },
    cardIcon: {
        backgroundColor: '#dedede',
        padding: 8,
        borderRadius: 10
    }
})  