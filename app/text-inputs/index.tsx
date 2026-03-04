import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedInput from '@/presentation/shared/ThemedInput';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  return (
    <KeyboardAvoidingView behavior='height'>
      <ScrollView>
        <ThemedView margin>
          <ThemeCard className='mb-4'>
            {/* <TextInput
          placeholder='nombre completo'
          autoCapitalize={'words'}
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })}
        /> */}
            <ThemedInput
              placeHolder='Nombre'
              onChangeText={(text) => setForm({ ...form, name: text })}
              keyboardType='default'
            />

            <ThemedInput
              placeHolder='Correo electronico'
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType='email-address'
            />

            <ThemedInput
              placeHolder='Telefono'
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType='numeric'
            />
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemeText>
              {JSON.stringify(form, null, 2)}
            </ThemeText>
          </ThemeCard>
          <ThemeCard>
            <ThemedInput
              placeHolder='Telefono'
              onChangeText={(text) => setForm({ ...form, phone: text })}
              keyboardType='numeric'
            />
          </ThemeCard>
        </ThemedView>
        <View style={{marginBottom: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
