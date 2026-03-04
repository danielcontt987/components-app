import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary')
  const [isRefresing, setIsRefresing] = useState(false)
  const onRefresh = async() => {
    setIsRefresing(true);

    setTimeout(() => {
      setIsRefresing(false)
    },3000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={isRefresing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
        />
      }
    >
      <ThemedView margin>
        <ThemeText>PullToRefreshScreen</ThemeText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
