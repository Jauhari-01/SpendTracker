
import * as React from 'react';
import { View, FlatList } from 'react-native';


import { Container } from 'native-base';
import Animated from 'react-native-reanimated';
import Itemm from './Item';
import { useSelector } from 'react-redux';

//Parts
import Cardd from './Parts/Cardd';
import Empty from './Parts/Empty';


export default function HomeScreen({ navigation }) {

  const { transactions } = useSelector((state) => state.transactions)


  return (
    // <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Animated.View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20

      }}>
        <Cardd navigation={navigation} />
      </Animated.View>
      <View style={{ flex: 1, width: '100%', marginTop: -170 }}>
        {
          transactions.length > 0 ? <FlatList
            data={transactions}
            renderItem={({ item }) => (
              <Itemm title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={(item) => item.id.toString()}
          /> : <Empty />
        }


      </View>

      </View>
    // </Container>
  );
}
