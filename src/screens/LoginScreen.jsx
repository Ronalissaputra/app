import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {LoginForm} from '../components/authform';
import {useLogin} from '../features/authintence';
import {SpinloadComp} from '../components/utils';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {mutate, isLoading, isSuccess} = useLogin();

  return (
    <SafeAreaView>
      {isLoading && <SpinloadComp />}
      {isSuccess && navigation.navigate('Stacknavigation')}
      <ScrollView>
        <LinearGradient
          colors={['#C9D6FF', '#E2E2E2']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="min-h-screen flex justify-center items-center">
          <Image
            source={require('../assets/Buminglogo.png')}
            className="w-[210px] h-[210px]"
          />
          <Text className="text-3xl text-rose-600">Masuk</Text>
          <View className="w-full px-2 my-2">
            <LoginForm mutate={mutate} />
            <View className="pt-5">
              <View className="flex-row justify-center items-center">
                <Text className="text-xl">
                  Belum punya akun?
                  <Text
                    onPress={() => navigation.navigate('RegisterScreen')}
                    className="text-purple-700 font-bold">
                    {' '}
                    Daftar
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
