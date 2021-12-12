import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const Emergency  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Select Type"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Location"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TextInput style = {styles.TextArea}
               underlineColorAndroid = "transparent"
               placeholder = "Description"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               multiline
               numberOfLines={4}
               />
            <TouchableOpacity
            onPress={() => navigation.navigate('MSDI')}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      );
};
export default Emergency

