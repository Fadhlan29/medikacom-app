import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();

export const handleToBack = () => {
  navigation.navigate('home');
};

