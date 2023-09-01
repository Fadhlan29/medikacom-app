import { StyleSheet } from "react-native"
import Colors from "../../constant/Colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        // paddingVertical: 15,
        paddingHorizontal: 10,
        paddingTop: 10,
        height: 1000
    },
    headerHome: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15,
    },
    iconHeaderHome: {
        marginLeft: 10,
        // backgroundColor: Colors.secondary,
        padding: 3,
        borderRadius: 10,
        width: 75,
    },
    logoHeaderHome: {
        width: 80,
        height: 50,
        borderWidth: 2
    },
    titleWrapper: {
        paddingLeft: 10
    },
    titleFirst: {
        fontSize: 25,
        fontFamily: 'Poppins-Regular',
        color: Colors.darkGrey,
    },
    titleSecond: {
        marginTop: -10,
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.darkGrey,
    },
    cardsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    cards: {
        width: 150,
        height: 110,
        marginBottom: 13,
        marginHorizontal: 10,
        borderRadius: 15
    },
    programStudyWrapper: {
        marginVertical: 5,
    },
    titleProgramStudy: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        marginTop: 10,
        color: Colors.darkGrey,
        paddingLeft: 10
    }
})