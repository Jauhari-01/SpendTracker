import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'native-base';


//Redux
import {useSelector} from 'react-redux';

function Card({ navigation }) {

  const {transactions} = useSelector(state => state.transactions);

  const prices = transactions.map((transaction)=>transaction.price);
  const totalPrice = prices.reduce((pre,cur)=>(pre += cur),0).toFixed(2);
  const exp = prices.filter(price => price < 0)
              .reduce((pre,cur)=>(pre += cur),0).toFixed(2);

  return (
    <LinearGradient
      colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
      style={{ ...styles.Box }}
    >
      <View style={{flex:1}}>
        <View style={{
          width: '70%',
          alignItems: 'flex-start'
        }}>
          <Text style={{
            fontSize: 15,
            color: '#fff',
            fontWeight: '600'
          }}>Current Balance</Text>
          <Text style={{
            fontSize: 32,
            color: '#fff',
            fontWeight: '700'
          }}>
            ₹{totalPrice}</Text>
        </View>
        <View style={{
          width: '70%',
          alignItems: 'flex-start'
        }}>
          <Text style={{
            fontSize: 15,
            color: '#fff',
            fontWeight: '600'
          }}>Spended Money</Text>
          <Text style={{
            fontSize: 32,
            color: '#fff',
            fontWeight: '700'
          }}>
            ₹{-exp}</Text>
        </View>
      </View>
      <View>
        <Button
          // rounded
          light
          style={{
            padding: 10,
            marginTop: 32,
            borderWidth: 3,
            borderColor: '#fff',
            backgroundColor: '#E10C62',
            alignItem: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('Add')}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>Add</Text>
        </Button>
      </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  }
})



export default Card;