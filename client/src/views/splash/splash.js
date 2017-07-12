/**
 * Created by kevin on 7/12/17.
 */
import React, {Component}from 'react';
import {Image, ScrollView} from 'react-native';

import  {scrollViewStyle}from '../../styles/lokobeeStyle';


let image1 = require('../../images/c_8.png');
let image2 = require('../../images/c_1.png');
let image3 = require('../../images/c_8.png');


export default class Splash extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <ScrollView
        horizontal={true}
         bounces={false}
         pagingEnabled={true}
       //  contentContainerStyle={scrollViewStyle.contentContainer}
       
      >
        <Image source={image1} style={scrollViewStyle.backgroundImage}/>
        <Image source={image2} style={scrollViewStyle.backgroundImage}/>
        <Image source={image3} style={scrollViewStyle.backgroundImage}/>
      </ScrollView>
    
    );
  }
  
}

