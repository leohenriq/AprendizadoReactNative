import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
export default props => {
    return (
        <TouchableOpacity
            style={[styles.button, {
                flexGrow: props.flex || 1,
                width: props.width || 47,
                borderBottomStartRadius: props.borderRadStart || 0,
                borderBottomEndRadius: props.borderRadEnd || 0,
                backgroundColor: props.bgColor || '#DEE1E1'
            }]}>
            <Text style={[styles.txtG, {
                color: props.color || "#000",
            }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
        height: 90,
    },
    txtG: {
        fontSize: 30
    }
})