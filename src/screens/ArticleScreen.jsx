import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import artikels from '../data/artikel';

// component imported
import {HeaderComp} from '../components/utils';

const ArticleScreen = () => {
  return (
    <SafeAreaView className="flex-1 h-auto mx-2">
      <ScrollView>
        <HeaderComp />
        {artikels.map(artikel => (
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            key={artikel.id}
            className="flex-row w-auto space-x-2 my-2 rounded-md">
            <Image
              className="w-[30%] h-[100px]"
              source={{
                uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1606187573/attached_image/cara-menjaga-kesehatan-tubuh-agar-terhindar-dari-penyakit.jpg',
              }}
            />
            <View className="w-full h-full pr-2">
              <Text className="text-xl w-[90%] text-slate-50 overflow-auto">
                {artikel.body}
              </Text>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({});
