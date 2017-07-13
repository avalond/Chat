/**
 * Created by kevin on 7/12/17.
 */
import React, {Component}from 'react';
import {Image, ScrollView, View} from 'react-native';
import  Button from  'react-native-awesome-button';

import  {scrollViewStyle}from '../../styles/lokobeeStyle';


let image1 = require('../../images/c_8.png');
let image2 = require('../../images/c_1.png');
let image3 = require('../../images/c_8.png');

function clickButton() {
  alert("aaa");
}

export default class Splash extends Component {
  
  
  render() {
    return (
      <ScrollView
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <Image source={image1} style={scrollViewStyle.backgroundImage}/>
        <Image source={image2} style={scrollViewStyle.backgroundImage}/>
        <Image source={image3} style={scrollViewStyle.backgroundImage}>
          <View style={styles.container}>
            <Button
              states={{
                default: {
                  backgroundStyle: {
                    backgroundColor: 'red',
                    minHeight: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30
                  },
                  onPress: clickButton()
                }
              }}
            >
              hahhaahhahahahaha!
            </Button>
          
          </View>
        </Image>
      
      </ScrollView>
    
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560
  }
});

