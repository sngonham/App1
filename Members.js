import React, { Component,useState,useEffect } from 'react'
import { View, Text, TouchableOpacity,Modal,StyleSheet,Alert } from 'react-native'
import styles from './Styles.js'


const Members  = ({ navigation }) => {

  const [modalVisible,setModalVisible] = useState(false)

      return (
         <View style={styles.container}>
            <Modal
              //  presentationStyle ="FullScreen"
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(modalVisible)
            }}
            >
            <TouchableOpacity  style={styles2.centeredView} onPress={() => setModalVisible(false)}>
                <Text style={styles2.modalHeading}> 
                What would you like to do with
                </Text>
                <Text style = {{color:'green',fontWeight:'bold',margin:10,textAlign:"center"}}> Sandile Sibisi ? </Text>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('UpdateMember');setModalVisible(false);}}
                    style = {styles.submitButton}>
                <Text style = {styles.submitButtonText}> Update Member</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => removeUser()}
                    style = {[styles.submitButton,{backgroundColor:"#aaaaaa"}]}>
                    <Text style = {{color:'#990000',textAlign:"center",fontWeight:"bold"}}> Remove Member </Text>
                </TouchableOpacity>
                <Text style = {styles2.modalTouchText}> 
                 Touch anywhere to close the modal (X)
                </Text>
            </TouchableOpacity >
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{backgroundColor:"grey",padding:15,marginTop:5,borderRadius:10}}>
                <Text style={{fontWeight:'bold',fontSize:20,paddingTop:5}}>Sandile Sibisi</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>ID No: 123456789101</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>Male</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>Cell: 1234567890</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{backgroundColor:"grey",padding:15,marginTop:5,borderRadius:10}}>
                <Text style={{fontWeight:'bold',fontSize:20,paddingTop:5}}>Sandile Sibisi</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>ID No: 123456789101</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>Male</Text>
                <Text style={{fontWeight:'bold',fontSize:15,paddingTop:5}}>Cell: 1234567890</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('NewMember')}
                style = {styles.submitButton}>
                <Text style = {styles.submitButtonText}> New Member </Text>
            </TouchableOpacity>           
         </View>
      );
      function removeUser(){
        setModalVisible(false);
        Alert.alert("House Member","Sandile removed Successfully!!");
        
      }
};
export default Members

const styles2 = StyleSheet.create({
    centeredView: {
      paddingLeft: 20,
      paddingRight:20,
      flexDirection: "column",
      backgroundColor:"white",
      paddingTop:"50%",
      paddingBottom:"100%",
    },
    modalHeading: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20
    },
    modalTouchText: {
      textAlign: "center",
      fontSize: 10,
      paddingTop:"90%"
    }
  });