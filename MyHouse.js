import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const MyHouse  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <Text> Regsiter a New House? </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('New House Continue')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> New House </Text>
            </TouchableOpacity>
            <Text> Already have a House? </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter House Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Household Lock Key"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
            <TouchableOpacity
            onPress={() => navigation.navigate('House')}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      );
};
export default MyHouse

