import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {  Checkbox, Box } from 'native-base';
import { useDispatch } from 'react-redux';

import { deletTransaction } from '../store/actions/TransactionAction';


const Itemm = ({ title, price, id }) => {

    const dispatch = useDispatch();

    return (
        <View style={{
            marginVertical: 3,
            paddingHorizontal: 30,
            paddingVertical: 15,
            
        }}>

            <View style={{width:'100%',flexDirection:'row'}}>
                <Checkbox 
                onPress={()=>{
                    dispatch(deletTransaction(id));
                }}
                style={{
                    fontSize: 17,
                    fontWeight: '700',
                    padding:25}}
                />
                <Box style={{width:'100%', flexDirection:'row',justifyContent:'space-between' }}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: '700',
                        color: 'red',
                        paddingLeft:15
                    }}>
                        {title}
                    </Text>

                    <Text style={{
                        fontSize: 17,
                        fontWeight: '700',
                        paddingRight:25,
                        color: price > 0 ? `#009BFC` : `#FF4500`
                    }}>
                        {price > 0 ? `₹${price}` : `-₹${Math.abs(price)}`}
                    </Text>
                </Box>
            </View>
        </View>
    )
}

export default Itemm;