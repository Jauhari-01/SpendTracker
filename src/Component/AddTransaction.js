
import React,{useState} from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Container,Box,Input, } from 'native-base';

//Redux
import { useDispatch } from 'react-redux';

import {addTransaction} from '../store/actions/TransactionAction';



export default function AddTransaction() {

    const dispatch = useDispatch();


    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');

    function submit(){
        if(!title || !price){
            return alert('Please fill all the fields');
        }
        console.log('runn');
        const id = Math.floor(Math.random()*600000);

        const newTransaction = {
            id,
            title,
            price: +price,
        };

        dispatch(addTransaction({...newTransaction}));
        console.log('runn');

    }


  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red' }}>
    //   <Text>Add Transaction</Text>
    // </View>
    // <Container>
    //   <Box style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
    //   <Input placeholder='Expense Title'/>
    //   </Box>
    // </Container>

<Container>
<View style={styles.mainContainer}>
<Text style={styles.mainHeader}>Login Form</Text>
<Text style={styles.description}>You can reach us anytime</Text>
<View style={styles.inputContainer}>
    <Text style={styles.Lable}>
        Enter Expense Title
    </Text>
    <TextInput style={styles.inputStyle}
        onChangeText={(boxValue) => setTitle(boxValue)} 
        />
</View>

<View style={styles.inputContainer}>
    <Text style={styles.Lable}>
        Enter Expense Price
    </Text>
    <TextInput style={styles.inputStyle}
        
        onChangeText={(boxValue) => setPrice(boxValue)} 
        keyboardType = 'numeric'
        />
</View>
<TouchableOpacity
    onPress={() => submit()}
    style={styles.buttons}
    >
    <Text style={styles.buttonsText}>ADD</Text>
</TouchableOpacity>
</View>

</Container>

  );
}


const styles = StyleSheet.create({
  mainContainer: {
      height: '100%',
      paddingHorizontal: 30,
      paddingTop: 30,
      backgroundColor: '#fff'
  },
  mainHeader: {
      fontSize: 25,
      color: '#344055',
      fontWeight: '500',
      paddingTop: 20,
      paddingBottom: 15,
      textTransform: 'capitalize',
      fontWeight: 'bold'
  },
  description: {
      fontSize: 20,
      color: '#7d7d7d',
      paddingBottom: 20,
      lineHeight: 25,
  },
  inputContainer: {
      marginTop: 20,
  },
  labels: {
      fontSize: 18,
      color: '#7d7d7d',
      marginTop: 10,
      marginBottom: 5,
      lineHeight: 25,
  },
  inputStyle: {
      borderWidth: 4,
      borderColor: 'rgba(0,0,0,0.3)',
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderRadius: 1,
      fontSize: 18
  },
  Wrapper: {
      paddingTop: 25,
      paddingBottom: 10,
      flexDirection: 'row'
  },
  WrapperText: {
      paddingLeft: 10,
  },
  buttons: {
      backgroundColor:"#628ff0",
      marginLeft: 45,
      marginRight: 65,
      padding: 10,
  },
  buttonsText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold'
  }
})