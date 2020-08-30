import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const LabelComponent = (props) => {
  const { title, style } = props;
  return (
    <Text style={[styles.text, style]}>{title}</Text>
  )
}

export default LabelComponent;