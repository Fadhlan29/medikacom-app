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
        paddingVertical: 10,
        marginBottom: 5
    },
    iconHeaderHome: {
        marginLeft: 10,
        // backgroundColor: Colors.secondary,
        padding: 3,
        borderRadius: 10,
    },
    logoHeaderHome: {
        width: 80,
        height: 50,
        resizeMode: 'cover',
    },
    expertise: {
        marginVertical: 10,
    },
    titleExpertise: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        marginTop: 15
    }
})