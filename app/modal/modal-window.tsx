import ThemeButton from '@/presentation/shared/ThemeButton'
import ThemedView from '@/presentation/shared/ThemedView'
import ThemeText from '@/presentation/shared/ThemeText'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'

const ModalWindow = () => {
    return (
        <ThemedView className='justify-center items-center flex-1' bgColor='#A52182'>
            <ThemeText>Hola soy un modal</ThemeText>
            {/* <ThemeButton onP>Otro modal</ThemeButton> */}
            <ThemeButton onPress={() => router.push('/modal')}>Cerrar</ThemeButton>
            <ThemeButton className='mt-5' onPress={() => router.push('/modal/modal-window-second')}>Otro modal</ThemeButton>
            <StatusBar 
                style={Platform.OS === 'ios' ? 'light' : 'auto'}
            />
        </ThemedView>
    )
}

export default ModalWindow