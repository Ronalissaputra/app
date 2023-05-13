import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fold} from 'react-native-animated-spinkit';

const SpinloadComp = () => {
  return (
    <View className="absolute z-50 w-full min-h-screen flex-1 items-center justify-center">
      <LinearGradient
        colors={['#bc4e9c', '#f80759']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="h-60 w-72 rounded-md">
        <View className="flex-1 justify-center items-center">
          <Fold size={100} color="#FFF" />
        </View>
      </LinearGradient>
    </View>
  );
};

export default SpinloadComp;
