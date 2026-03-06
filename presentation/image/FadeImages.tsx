import { useAnimation } from '@/hooks/useAnimation'
import { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'


interface Props {
    uri: string,
    className?: string,
    style: StyleProp<ImageStyle>
}

const FadeImages = ({uri, style} : Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const {animatedOpcity, fadeIn} = useAnimation();
  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {
            isLoading && (
                <ActivityIndicator style={{position: 'absolute'}} color="grey" size={30} />
            )
        }
      <Animated.Image 
        source={{uri}}
        style={[
            style,
            {opacity: animatedOpcity}
        ]}
        onLoadEnd={() => {
            fadeIn({
                duration: 600
            })
            setIsLoading(false)
        }}
      />
    </View>
  )
}

export default FadeImages