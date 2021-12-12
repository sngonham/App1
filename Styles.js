
import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      paddingLeft: 20,
      paddingRight:20,
      flexDirection: "column",
   },
   input: {
      marginTop: 15,
      marginBottom: 15,
      height: 40,
      paddingLeft: 20,
      paddingRight: 20,
      borderColor: '#7a42f4',
      borderWidth: 1,
      borderRadius:10
   },
   TextArea: {
      marginTop: 15,
      marginBottom: 15,
      padding: 20,
      borderColor: '#7a42f4',
      borderWidth: 1,
      borderRadius:10
   },
   submitButton: {
      backgroundColor: 'green',
      padding: 10,
      marginTop: 15,
      marginBottom: 15,
      height: 40,
      borderRadius:10
   },
   submitButtonText:{
      color: 'white',
      textAlign:'center'
   },
   SignText:{
      fontWeight:'bold',
      color: 'green'
   },
   paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    ImageArea:{
      backgroundColor: "green",
      padding: 16,
      height:"50%",
      flexDirection: "column",
      alignItems:'center',

    },
    ProfileName:{
      fontWeight:'bold',
      color: 'white'
    },
    ProfilePhoto:{
       width:100,
       height:100,
       marginTop:"25%"
    },
    homeButton: {
      backgroundColor: 'green',
      padding: 10,
      marginTop: 15,
      marginBottom: 15,
      height: 40,
      borderRadius:10
   },
   homeButtonText:{
      color: 'white',
      textAlign:'left'
   },
})

export default styles