
import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';

//Parts
import Cardd from './Parts/Cardd';
import Empty from './Parts/Empty';

//list item card
import Itemm from './Item';


export default function HomeScreen({ navigation }) {

const { transactions } = useSelector((state) => state.transactions)


    return (

    <View style={styles.mainContainer}>
      <Animated.View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20

      }}>
        <Cardd navigation={navigation} />
      </Animated.View>
      <View style={styles.listView}>
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

  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#b9cded'
  },
  listView:{
    flex: 1, 
    width: '100%', 
    marginTop: -170
  }
})