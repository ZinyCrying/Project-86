import React from "react";
import {View, TouchableOpacity, Text, Image, StyleSheet} from "react-native";

export default class PostScreen extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){

  }

  
    render() {
      return (
        <View style={styles.container}>
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });