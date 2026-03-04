import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedInput from '@/presentation/shared/ThemedInput';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    emial: '',
    phone: ''
  });

  return (
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
          onChangeText={(text) => setForm({...form, name: text})} 
          keyboardType='numeric'
          />
      </ThemeCard>
      <ThemeCard>
        <ThemeText>
          {JSON.stringify(form, null, 2)}
        </ThemeText>
      </ThemeCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
