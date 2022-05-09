
import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider, Button, Container, CheckBox, Body, Right } from 'native-base';
import Animated from 'react-native-reanimated';
import Itemm from './Item';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];




export default function HomeScreen({ navigation }) {
  return (
    <Container style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Animated.View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal:20
       
      }}>
        <LinearGradient
          colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
          style={{ ...styles.Box }}
        >
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
              ₹10,000</Text>
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
      </Animated.View>
      <View style={{ flex: 1,width:'100%'}}>
        {/* <View style={{alignItems:'center',marginTop:30}}>
          <Text style={{ color: 'black', fontWeight: '700',fontSize:20 }}>
            No transaction yet
          </Text>
        </View> */}
        <FlatList 
          data={DATA}
          renderItem={({item})=>(
            <Itemm title={item.title} price={item.price} id={item.id}/>
          )}
          keyExtractor={(item)=>item.id}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22
  }
})