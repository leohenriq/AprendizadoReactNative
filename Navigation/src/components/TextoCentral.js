import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default props => {
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.corFundo || '#000'
    }}>
        <Text style={{
            fontSize: 50,
            color: props.corText || '#FFF'
        }}>{props.children}</Text>
    </View>
}