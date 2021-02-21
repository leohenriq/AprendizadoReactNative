import React from 'react';
import { Text, StyleSheet } from 'react-native';
export default props => {
    return (
        <Text style={styles.txtDisplay}>0</Text>
    )
}
const styles = StyleSheet.create({
    txtDisplay: {
        textAlign: 'right',
        color: '#FFF',
        fontSize: 130,
    }
})