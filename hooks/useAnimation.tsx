import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
    const animatedOpcity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({duration = 300, toValue = 1, useNativeDrive = true, easing = Easing.bounce, callback = () => {}}) => {
        Animated.timing(animatedOpcity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDrive,
            easing: easing
        }).start(callback);

    }

    const fadeOut = ({duration = 300, toValue = 0, useNativeDrive = true, easing = Easing.ease, callback = () => {}}) => {
        Animated.timing(animatedOpcity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDrive
        }).start(callback);
    }

    const startMovingTopPosition = ({initialPosition = -100, duration = 700, toValue = 0, useNativeDrive = true, easing = Easing.bounce, callback = () => {}}) => {
        animatedTop.setValue(initialPosition); 
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDrive,
            easing: easing
        }).start();
    }

    return {
        animatedTop,
        animatedOpcity,
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}
