
import * as React from 'react';
import { View, Text ,StyleSheet,FlatList} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from 'expo-linear-gradient';
import {Button,Container,CheckBox,Body,Right} from 'native-base';
import Animated from 'react-native-reanimated';



export default function HomeScreen() {
  return (
    <Animated.View style={{ 
      flex: 1, 
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizantal: 20 }}>
      <LinearGradient 
        colors={['#FAAD3D','#EFC90A','#F1CB0C']}
        style={styles.Box}
      >
        <View></View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  Box:{
    width:'100%',
    height: 189,
    borderRadius:15,
    flexDirection:'row',
    padding:22
  }
})