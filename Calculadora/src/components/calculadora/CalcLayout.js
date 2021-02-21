import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button'
import Display from './Display'
export default props => {
    const [num, setNum] = useState(0);

    return (
        <View style={style.V1}>
            <View style={style.V3}>
                <Display num={num} />
            </View>
            <View style={style.V2}>
                <Button title="AC" flex={3} bgColor="#D6D6D6" />
                <Button title="%" bgColor="#D6D6D6" />
                <Button title="÷" bgColor="#EC9649" color="#FFF" />
            </View>
            <View style={style.V2}>
                <Button title="7" ref="btn7" onPress={setNum(num)} />
                <Button title="8" />
                <Button title="9" />
                <Button title="X" bgColor="#EC9649" color="#FFF" />
            </View>
            <View style={style.V2}>
                <Button title="4" />
                <Button title="5" />
                <Button title="6" />
                <Button title="-" bgColor="#EC9649" color="#FFF" />
            </View>
            <View style={style.V2}>
                <Button title="1" />
                <Button title="2" />
                <Button title="3" />
                <Button title="+" bgColor="#EC9649" color="#FFF" />
            </View>
            <View style={style.V2}>
                <Button title="0" flex={3} borderRadStart={10} />
                <Button title="." />
                <Button title="=" bgColor="#EC9649" color="#FFF" borderRadEnd={10} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    V1: {
        margin: 10,
        backgroundColor: "#919191",
        borderRadius: 10
    }, V2: {
        flexGrow: 1,
        flexDirection: "row"
    }, V3: {
        backgroundColor: "#4C4C4C",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    }
})