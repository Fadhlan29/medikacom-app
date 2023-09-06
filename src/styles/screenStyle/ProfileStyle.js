import { StyleSheet } from "react-native"
import Colors from "../../constant/Colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightGrey
    },
    banner: {
        flex:1, 
        padding:60, 
        backgroundColor: Colors.primary, 
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    image: {
        marginTop:-140,
        alignSelf:'center',
        width:130,
        height:130
    },
    title: {
        marginTop:5,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.darkGrey,
        alignSelf:'center',
    },
    roundedBorder: {
        marginTop:-80,
        width: 155,
        height: 155,
        backgroundColor: Colors.lightGrey,
        alignSelf: 'center',
        borderRadius:80
    },
    titleSecond: {
        fontSize: 15,
        fontFamily: 'Poppins-light',
        color: Colors.darkGrey,
        alignSelf:'center',
    },
    card: {
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '100%',
        marginBottom: 10,
        backgroundColor: Colors.lightGrey,
        elevation: 4,
        flexDirection: 'row',
    },
    imageCard: {
        width:150,
        height:150,
        resizeMode: 'cover',
        alignSelf:'center'
    },
    textCard: {
        maxWidth: 250, 
        justifyContent:'center', 
        alignItems:'center',
        padding:5
    },
    imageMedsos: {
        borderColor:'#808080',                    
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10
    }
})