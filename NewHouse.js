import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const NewHouse  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter House Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />           
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "House Owner's ID Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "New Household Lock Key"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Confirm Household Lock Key"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TouchableOpacity
            onPress={() => navigation.navigate('MSDI')}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      );
};
export default NewHouse

