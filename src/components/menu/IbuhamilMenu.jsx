import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LabelComp, SpinloadComp} from '../utils';
import {useGetibuhamil} from '../../features/ibuhamilintence';

const IbuhamilMenu = () => {
  const {data, isLoading} = useGetibuhamil();
  const uniqueData = {};

  if (data && data.length > 1) {
    data.forEach(item => {
      if (!uniqueData[item.id]) {
        uniqueData[item.id] = item;
      }
    });
  }
  const uniqueDataArray = Object.values(uniqueData);

  return (
    <SafeAreaView className="h-auto">
      {isLoading && <SpinloadComp />}
      {uniqueDataArray.length > 1 ? (
        <>
          <ScrollView stickyHeaderIndices={[0]}>
            <LabelComp>IBU HAMIL</LabelComp>
            <View className="mx-2 mt-2">
              {uniqueDataArray.reverse().map(data => (
                <View key={data.uuid}>
                  <LinearGradient
                    colors={['#c471ed', '#f64f59']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    className="w-full h-20 rounded-md mb-3">
                    <TouchableOpacity className="p-2 flex-row items-center space-x-5">
                      <View className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                        <Text className="text-xl">{data.name[0]}</Text>
                      </View>
                      <Text className="text-2xl">{data.name}</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              ))}
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <View className="w-full min-h-screen bg-white flex-1 items-center justify-center">
            <Image
              source={require('../../assets/notdata.png')}
              className="w-40 h-40"
            />
            <Text className="text-2xl text-[#F64F59]">Belum ada data!</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default IbuhamilMenu;
