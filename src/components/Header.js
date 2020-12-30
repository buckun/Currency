import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const Header = (props) => {
        const { header, headerText } = styles;
        
        return (
            <View style={header}>
                <Text  style={headerText}>{props.headerText}</Text>
            </View>
        )
    
};
export default Header;
const styles = StyleSheet.create({
    header: {
        paddingBottom: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#788B91',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})