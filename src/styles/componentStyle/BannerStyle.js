import {StyleSheet} from 'react-native';
import Colors from '../../constant/Colors';

export const styles = StyleSheet.create({
    bgBanner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        height: 120,
    },
    textBannerFirst: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: Colors.darkGrey,
    },
    textBannerSecond: {
        fontSize: 23,
        color: Colors.darkGrey,
        fontFamily: 'Poppins-Bold',
    },
});
