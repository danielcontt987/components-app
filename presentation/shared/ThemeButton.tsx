import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps{
    onPress?: () => void;
    className?: string,
    children: string,

}

const ThemeButton = ({onPress, className, children}: Props) => {
  return (
    <Pressable
        onPress={onPress}
        className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-3 active:opacity-80 ${className}`}
    >
      <Text className='text-white text-xl'>{children}</Text>
    </Pressable>
  )
}

export default ThemeButton