import { useAnimation } from '@/hooks/useAnimation';
import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  

  const {animatedOpcity, animatedTop, fadeIn, fadeOut, startMovingTopPosition} = useAnimation();

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
      <ThemeButton className='my-5' onPress={() => {
        fadeIn({

        }),
        startMovingTopPosition({
          duration: 800,
          easing: Easing.bounce
        });
      }}>
        FadeIn
      </ThemeButton>
      <ThemeButton className='my-5' onPress={() => fadeOut({})}>
          FadeOn
      </ThemeButton>
    </ThemedView>
  );
};
export default Animation101Screen;
