import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const HeaderComponent = (props) => {
  const { title } = props;
  return (
      <Text style={styles.text}>{title}</Text>
  )
}

export default HeaderComponent;