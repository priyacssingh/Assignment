import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

import styles from './styles';
import IMAGES from '../../assets/images';
import { SELECT_COLOR} from '../../constants/appConstants';

const Item = ({ item, onPress, style }) => (
   <TouchableOpacity onPress={onPress}
    style={[styles.list, styles.border, style]}>
    <Text style={[styles.text, style]}>{item.color}</Text>
  </TouchableOpacity>
);

const DropDownComponent = (props) => {
  const { colors } = props;
  const [title, setTitle] = useState(SELECT_COLOR)
  const [checked, setChecked] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#EF4C4C' : '#FFF';
    const color = item.id === selectedId ? '#FFF' : '#000';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          setChecked(!checked)
          setTitle(item.color)
        }
        }
        style={{ backgroundColor, color }}
      />
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={()=>setChecked(!checked)} style={styles.button}>
        <Text style={[styles.text, { alignSelf: 'center' }]}>{title}</Text>
        <Image source={IMAGES.downArrowImg}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
      {checked ?
      <FlatList
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={[styles.dropDownList, styles.border]}
      />
      : null}
    </View>
  )
}

export default DropDownComponent;