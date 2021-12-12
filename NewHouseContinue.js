import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const NewHouseContinue  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter your RSA ID"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />           
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Select Provice"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "City/Town"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Suburb/Township"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Street Name/Section Code"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TouchableOpacity
            onPress={() => navigation.navigate('New House')}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Continue </Text>
            </TouchableOpacity>
         </View>
      );
};
export default NewHouseContinue

