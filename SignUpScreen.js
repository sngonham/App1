import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
//import { FloatingLabelInput } from 'react-native-floating-label-input';
import styles from './Styles.js'

 const SignUpScreen = ({ navigation }) =>  {
   // const [cont, setCont] = useState('');
   // const [show, setShow] = useState(false);
 
   // useEffect(() => {
   //   const timeout = setTimeout(() => {
   //     setShow(!show);
   //   }, 5000);
   //   return () => clearTimeout(timeout);
   // }, [show]);
      return (
         <View style = {styles.container}>
         {/* <FloatingLabelInput style = {styles.input}
            label={'Name & Surname'}
            value={cont}
            onChangeText={value => setCont(value)}
            customShowPasswordComponent={<Text>Show</Text>}
            customHidePasswordComponent={<Text>Hide</Text>}
               /> */}
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name & Surname"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Contact Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
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
            style = {styles.submitButton}
            >
            <Text style = {styles.submitButtonText}> Sign Up </Text>
         </TouchableOpacity>
         <Text>{"\n\n"} Do you have an Account?
               <Text style ={styles.SignText} onPress={() => navigation.navigate('Sign In')}> Sign In </Text>
            </Text>
      </View>
      );
   };

   export default SignUpScreen

