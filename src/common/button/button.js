import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonComponent = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;