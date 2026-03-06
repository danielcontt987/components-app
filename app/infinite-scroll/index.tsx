import FadeImages from '@/presentation/image/FadeImages';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

const InfiniteScrollScreen = () => {
  const [numbers, setNumber] = useState([0,1,2,3,4,5,6])

  const loadedMore = () => {
    const newArray = Array.from({length: 5}, (_,i) => numbers.length + i)
    setTimeout(() => {
      setNumber([...numbers, ...newArray])
    }, 3000);
  }


  return (
    <ThemedView>
      <FlatList 
        data={numbers}
        renderItem={({item}) => <ListItem number={item}/>}
        onEndReached={loadedMore}
        onEndReachedThreshold={0.60}
        ListFooterComponent={() => (
          <ActivityIndicator
            className='h-[150px] justify-center'
            size={40}
          />
        )}
      />

    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListProps{
  number: number
}


const ListItem = ({number}: ListProps) => {
  return (
    // <Image 
    //   source={{uri: `https://picsum.photos/id/${number}/500/400`}}
    //   style={{
    //     height: 400,
    //     width: "100%"
    //   }}
    // />
     <FadeImages style={{
      height: 400,
      width: '100%'
     }} uri={`https://picsum.photos/id/${number}/500/400`}/>
  )
}