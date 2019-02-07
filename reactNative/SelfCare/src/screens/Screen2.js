import {View, Text} from 'react-native';
import React from 'react';
import {Header} from '../components/common';

const Screen2 = ()=>{
    return(<View style={{flex:1}}><Header headerText="Screen 2"/>
        <Text style={{textAlign:"center",marginTop:50, fontWeight:"bold",fontSize:20}}>
            Screen coming soon
        </Text>
    </View>)
}

export {Screen2}