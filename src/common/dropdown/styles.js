import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  image: {
    width: 20,
    height: 20,
    alignSelf:'center'
  },
  button: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    borderColor: '#E8E7E7',
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: '#E8E7E7',
    paddingHorizontal: 10
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  border: {
    borderBottomColor: '#E8E7E7',
    borderBottomWidth: 1,
  },
  dropDownList: {
    borderColor: '#E8E7E7',
    borderWidth: 1,
    marginBottom: 10
  }
})
export default styles;
