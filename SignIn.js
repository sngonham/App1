import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const Login  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            
            <TouchableOpacity
            onPress={() => navigation.navigate('Root',{ screen: 'MSDI' })}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Sign In </Text>
            </TouchableOpacity>
            <Text>{"\n\n"} Don't have an Account?
               <Text style ={styles.SignText} onPress={() => navigation.navigate('Sign Up')}> Sign Up </Text>
            </Text>
         </View>
      );
};
export default Login

