import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text,Image,TouchableOpacity, StyleSheet, View } from "react-native";
import styles from './Styles.js';
import Members from "./Members.js";

const Home = ({ navigation }) => {

  return (
    
    <View>      
        <View style={styles.ImageArea} >
            <Image
            style={styles.ProfilePhoto}
            source={require('./149071.png')}
            />
            <Text style={styles.ProfileName}>{'\n'}William Legane {'\n'}{'\n'}</Text>
        </View>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Enquiries')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> Enquiries </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Complaints')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> Complaints </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('My House')}
               style = {styles.homeButton}>
               <Text style = {styles.homeButtonText}> My House </Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};


export default Home;