import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

const dateInitialState =
{
    "CAD": "",
    "EUR": "",
    "JPY": "",
    "TRY": "",
    "USD": ""
};


const Converter = (props) => {
    const [valueCurrency, setValueCurrency] = useState();
    const [dateResponse, setDate] = useState(dateInitialState);
    const [oldResponse, setOldResponse] = useState(dateInitialState);
    const [isRefreshing, setisRefreshing] = useState(true);


    useEffect(() => {
        getCurrencyData();
        return () => {
            console.log("test123");
        }
    }, []);

    const getCurrencyData = () => {
        axios.get('http://data.fixer.io/api/latest?access_key=a2ad6e06be68c00d2bf3d56e15444490&symbols=USD,EUR,CAD,TRY,JPY')
            .then(
                response => {
                    console.log("test", response.data.rates)
                    setDate(response.data.rates)
                    setOldResponse(response.data.rates)
                })

    }

    const changeTextInput = (text) => {
        
        const numeric = parseInt(text);
        if(text !== "") {
            console.log("test", numeric);
            const newDate = {
                "CAD": numeric * oldResponse.CAD,
                "EUR": numeric * oldResponse.EUR,
                "JPY": numeric * oldResponse.JPY,
                "TRY": numeric * oldResponse.TRY,
                "USD": numeric * oldResponse.USD
            }
            setValueCurrency(text);
            setDate(newDate)
        }
        
    }
    return (
        <View>
            <TextInput
                style={{ margin: 12 }}
                placeholder="Enter EUR Value"
                placeholderTextColor='red'
                onChangeText={(text) => {
                    changeTextInput(text);
                }} />
            <View style={{ margin: 8 }}>
                <Text>TRY : {dateResponse.TRY}</Text>
                <Text>USD : {dateResponse.USD}</Text>
                <Text>CAD : {dateResponse.CAD}</Text>
                <Text>JPY : {dateResponse.JPY}</Text>
                <Text>EUR : {dateResponse.EUR}</Text>
            </View>
        </View>
    )
}; export default Converter;

const styles = StyleSheet.create({
    container: {

    }
})