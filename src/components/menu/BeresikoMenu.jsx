import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LabelComp} from '../utils';

const BeresikoMenu = () => {
  const datas = [
    {
      id: 2,
      nama: 'Sahrul',
    },
    {
      id: 3,
      nama: 'Arman',
    },
    {
      id: 4,
      nama: 'Jhon',
    },

    {
      id: 6,
      nama: 'Sahrul',
    },

    {
      id: 8,
      nama: 'Jhon',
    },
    {
      id: 9,
      nama: 'Arman',
    },
    {
      id: 8,
      nama: 'Jhon',
    },
  ];
  const uniqueData = {};
  datas.forEach(item => {
    if (!uniqueData[item.id]) {
      uniqueData[item.id] = item;
    }
  });
  const uniqueDataArray = Object.values(uniqueData);

  return (
    <SafeAreaView className="h-auto">
      <ScrollView stickyHeaderIndices={[0]}>
        <LabelComp>BERESIKO</LabelComp>
        <View className="mx-2 mt-2">
          {uniqueDataArray.reverse().map(data => (
            <>
              <LinearGradient
                key={data.id}
                colors={['#c471ed', '#f64f59']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                className="w-full h-20 rounded-md mb-3">
                <TouchableOpacity className="p-2 flex-row items-center space-x-5">
                  <View className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                    <Text className="text-xl">{data.nama[0]}</Text>
                  </View>
                  <Text className="text-2xl">{data.nama}</Text>
                </TouchableOpacity>
              </LinearGradient>
            </>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BeresikoMenu;
