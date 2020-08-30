import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const TextInputComponent = (props) => {
  const { value, onChangeText, keyboardType, maxLength } = props;
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      value={value}
      underlineColorAndroid="transparent"
      keyboardType={keyboardType}
      maxLength={maxLength}
      />
  )
}

export default TextInputComponent;