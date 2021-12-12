import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import styles from './Styles.js'

const House  = ({ navigation }) => {
      return (
         <View style = {styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Members')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> Members </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Members')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> Rates </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Members')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> Account Enquiries </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Members')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> Ownership </Text>
            </TouchableOpacity>
         </View>
      );
};
export default House

