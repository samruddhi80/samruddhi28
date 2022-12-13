import React from 'react'
import{Text,View,StyleSheet,Image,Platform,StatusBar,SafeAreaView} from "react-native"
import {RFValue} from "react-native-responsive-fontsize"
import {FaltList} from "react-native-gesture-handler"
import PostCard from "./PostCard"
export default class Feeds extends React.Component{
  constructor (props){
super(props)
  }
  keyExtractor=(item,index)=>index.toString()
  renderItem=({item:post})=>{
    return <PostCard post={post}> 
  }
render(){
  return(
   <View style={styles.container}>
   <SafeAreaView style={styles.droidSafeArea}/>
   <View style={styles.appTitle}>
   <View style={styles.appIcon}>
   <Image
   source={require("../assetss/assets/logo.png")}
   style={styles.iconImage}
   ></Image>
   </View>
   <View style={styles.appTitleTextContainer}>
   <Text style={styles.appTitleText}>Spectagram</Text>
   </View>
   </View>
   <View style={styles.cardConatiner}>
   <FaltList 
   keyExtractor={this.keyExtractor}
   data={posts}
   renderItem={this.renderItem}
   />
   </View>
   </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop:Platform.OS ==="android"? Statusbar.currentHeight: RFValur(35)
  },
  appTitle:{
    flex:0.2,
    flexDirection:"row"
  },
  appIcon:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  iconImage:{
    width:"100%",
    height:"100%",
resizeMode:"contain"
  },
  appTitleTextConatiner:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize:RFValue(28),
  },
  cardContainer:{
    flex:0.85
  }
});