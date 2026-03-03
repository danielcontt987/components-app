import { useThemeColor } from '@/hooks/use-theme-color';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemeText from './ThemeText';


interface Props {
    text?: string,
    value: boolean,
    onValueChange: (value: boolean) => void,
    className?: string
}

const isAndroid = Platform.OS === 'android';
const ThemedSwitch = ({ text, value, onValueChange, className }: Props) => {
    const switchActiveColor = useThemeColor({}, 'primary')
    return (
        <Pressable
            className={`mx-2 flex flex-row justify-between items-center active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {text ? (<ThemeText type='h2'>{text}</ThemeText>) : <View />}
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? switchActiveColor : ''}
                trackColor={{
                    false: 'grey',
                    true: switchActiveColor
                }}
            />
        </Pressable>
    )
}

export default ThemedSwitch