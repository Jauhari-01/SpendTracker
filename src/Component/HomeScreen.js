
import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider, Button, Container, CheckBox, Body, Right } from 'native-base';
import Animated from 'react-native-reanimated';



export default function HomeScreen({navigation}) {
  return (
    <Container>
      <Animated.View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizantal: 20
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
                borderWidth:3,
                borderColor:'#fff',
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