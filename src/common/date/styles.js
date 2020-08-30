import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  date: {
    width: windowWidth - 40,
    marginVertical: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#E8E7E7',
    borderWidth: 1,
    backgroundColor: '#E8E7E7',
    paddingLeft: 10
  }
})
export default styles;
