import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {  Checkbox, Box } from 'native-base';


const Itemm = ({ title, price, id }) => {
    return (
        <View style={{
            marginVertical: 13,
            paddingHorizontal: 30,
            paddingVertical: 15,
            
        }}>

            <View style={{width:'100%',flexDirection:'row',backgroundColor:'green'}}>
                <Checkbox 
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
                        color: 'black',
                        paddingRight:25
                    }}>
                        700
                    </Text>
                </Box>
            </View>
        </View>
    )
}

export default Itemm;