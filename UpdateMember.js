import React, { Component } from 'react'
import { View, Text, TouchableOpacity,TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const UpdateMember  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <View>
                <Text style={{fontWeight:'bold',fontSize:20,paddingTop:5}}>Sandile Sibisi</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>ID No: 123456789101</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>Male</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>Cell:</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Phone Number"
                    placeholderTextColor = "#9a73ef"
                    value={'1234567890'}
                    autoCapitalize = "none"
               />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('MSDI')}
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Update </Text>
            </TouchableOpacity>
         </View>
      );
};
export default UpdateMember

