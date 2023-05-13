import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AlertsuccessComp = () => {
  return (
    <View className="absolute z-50">
      <LinearGradient
        colors={['#bc4e9c', '#f80759']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="h-60 w-72 rounded-md">
        <View className="flex-1 justify-center items-center">
          <Icon name="done" size={100} color="#FFF" />
        </View>
      </LinearGradient>
    </View>
  );
};

export default AlertsuccessComp;
