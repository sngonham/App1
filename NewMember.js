import React, { Component } from 'react'
import { View, Text, TouchableOpacity,TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const NewMember  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Name"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
            />
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Surname"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
            />
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Gender"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
            />
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Role"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
            />
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Phone Number"
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
export default NewMember

