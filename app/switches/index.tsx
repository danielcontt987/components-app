import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })
  return (
    <ThemedView margin className='mt-2'>
      <ThemeCard>
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        /> */}

        <ThemedSwitch
          text='Activo'
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mt-2'
          value={state.isActive}
        />

        <ThemedSwitch
          text='Hombriento'
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='mt-2'
          value={state.isHungry}
        />

        <ThemedSwitch
          text='Contento'
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mt-2'
          value={state.isHappy}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default Switches;
