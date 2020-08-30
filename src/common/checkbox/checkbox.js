import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import IMAGES from '../../assets/images';
const CheckboxComponent = (props) => {
  const { titleYes, titleNo, onPressYes, onPressNo, checkedYes, checkedNo } = props;
  const imageYes = checkedYes ? IMAGES.checked : IMAGES.unchecked
  const imageNo = checkedNo ? IMAGES.checked : IMAGES.unchecked

  return (
    <View style={styles.checkbox}>
    <TouchableOpacity style={styles.button} onPress={onPressYes}>
        <Image source={imageYes}
          resizeMode="contain"
          style={styles.image}
        />
      <Text style={styles.text}>{titleYes}</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressNo}>
        <Image source={imageNo}
          resizeMode="contain"
          style={styles.image}/>
      <Text style={styles.text}>{titleNo}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CheckboxComponent;