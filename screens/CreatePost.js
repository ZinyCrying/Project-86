import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Dimensions, TextInput, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";


export default class CreateStory extends Component {
  constructor(props){
    super(props);
    this.state = {
      previewImage: "image_1",
      dropdownHeight: 40
    }


  }
  render() {
    let preview_images = {
      image_1: require("../assets/story_image_1.png"),
      image_2: require("../assets/story_image_2.png"),
      image_3: require("../assets/story_image_3.png"),
      image_4: require("../assets/story_image_4.png"),
      image_5: require("../assets/story_image_5.png"),
    };
    
    return (
      <View style={styles.container}>
        <SafeAreaView style = {styles.droidSafeArea} />
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
            <Image 
            source = {require("../assets/logo.png")}
            ></Image>
          </View>
        </View>
        <View style = {styles.fieldContainer}>
         <ScrollView>
            <Image
             source = {this.preview_image[this.state.previewImage]}
             style = {styles.previeImage}
             ></Image>
             <View style = {{height:RFValue(this.state.dropdownHeight)}}>
              <DropDownPicker
              item = {[
                {label: "Image 1", value: "image_1"},
                {label: "Image 2", value: "image_2"},
                {label: "Image 3", value: "image_3"},
                {label: "Image 4", value: "image_4"},
                {label: "Image 5", value: "image_5"},
                {label: "Image 6", value: "image_6"},
                {label: "Image 7", value: "image_7"}
              ]}
              defaultValue={this.state.previeImage}
              containerStyle = {{
                height: 40,
                borderRadius: 20,
                marginTop: 10
              }}
              onOpen = {()=>{
                this.setState({dropdownHeight:170});
              }}
              onClose = {()=>{
                this.setState({dropdownHeight: 40});
              }}
              style = {{backgroundColor:"transparent"}}
              itemStyle = {{
                justifyContent: "flex-start"
              }}
              dropDownStyle={{backgroundColor: "#2a2a2a"}}
              labelStyle = {{
                color: "white"
              }}
              arrowStyle = {{
                color: "white"
              }}
              onChangeItem = {item => 
                     this.setState({
                      previeImage: item.value
                     })
                    }
              />
             </View>
             <TextInput  
              style = {styles.inputFont}
              onChangeText = {caption => this.setState({caption})}
              placeholder = {"Caption"}
              numberOfLines = {5}
              placeholderTextColor = "white"
             />
           </ScrollView>  
        </View>
        <View style = {{flex:0.08}}/>
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