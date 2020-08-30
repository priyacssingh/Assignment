import React from 'react';
import DatePicker from 'react-native-datepicker'

import styles from './styles';

const DateComponent = (props) => {
  const { date, onDateChange } = props;
  return (
    <DatePicker
        style={styles.date}
        showIcon={false}
        date={date}
        mode="date"
        placeholder=' '
        format="YYYY-MM-DD"
        minDate="1800-05-01"
        maxDate="2020-10-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
            customStyles={{
              dateText: {
                alignSelf: 'flex-start',
              },
          dateInput: styles.textInput
          // ... You can check the source to find the other keys.
        }}
        onDateChange={onDateChange}
      />
  )
}

export default DateComponent;