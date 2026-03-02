import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const animatedOpcity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpcity,{
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(animatedTop, {
       toValue: 0,
       duration: 700,
       useNativeDriver: true,
       easing: Easing.bounce
    }).start();
  }

  const fadeOut = () => {
    Animated.timing(animatedOpcity,{
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start(() => animatedTop.resetAnimation());
  }

  return (
    <ThemedView margin className='justify-center items-center'>
      <Animated.View 
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpcity,
          transform:[
            {
              translateY: animatedTop
            }
          ]
        }}
      />
      <ThemeButton className='my-5' onPress={fadeIn}>
        FadeIn
      </ThemeButton>
      <ThemeButton className='my-5' onPress={fadeOut}>
          FadeOn
      </ThemeButton>
    </ThemedView>
  );
};
export default Animation101Screen;
