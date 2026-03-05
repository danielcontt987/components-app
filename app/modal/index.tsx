import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import ModalScreenModern from './modal-modern';



const ModalScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <ThemedView margin>
      <Link asChild href='/modal/modal-window' className='mx-2'>
        <ThemeText type="normal" className='text-light-text dark:text-dark-text my-2 text-xl'>
          Abrir modal
        </ThemeText>
      </Link>
      <ThemeButton onPress={() => router.push('/modal/modal-window')}>
        Abrir Modal
      </ThemeButton>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemeButton onPress={() => setVisible(true)} >
          Abrir Modal con modal
        </ThemeButton>
      </View>
      <ModalScreenModern visible={visible} >
        <View className="flex-1 bg-black/50 justify-center items-center">
                <View className="bg-white p-6 rounded-2xl w-[85%]">
                    <Text className="text-lg font-bold mb-3">
                        Modal
                    </Text>
                    <Text className="mb-4">
                        Este es un modal en React Native
                    </Text>
                    <Pressable
                        onPress={() => setVisible(false)}
                        className="bg-blue-500 p-3 rounded-xl"
                    >
                        <Text className="text-white text-center">
                            Cerrar
                        </Text>
                    </Pressable>
                </View>
            </View>
      </ModalScreenModern>
    </ThemedView>
  );
};
export default ModalScreen;
