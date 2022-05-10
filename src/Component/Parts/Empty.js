import React from "react";
import {View,Text} from 'react-native';


function Empty(){
    return(
        <View style={{alignItems:'center',marginTop:30}}>
          <Text style={{ color: 'black', fontWeight: '700',fontSize:20 }}>
            No transaction yet
          </Text>
        </View> 
    )
}

export default Empty;