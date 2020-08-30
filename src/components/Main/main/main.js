import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  HeaderComponent, LabelComponent, TextInputComponent,
  ButtonComponent, CheckboxComponent, DropDownComponent,
  DateComponent
} from '../../../common';
import styles from './styles';
import {  HEADER_TITLE, CUSTOMER_NAME, CUSTOMER_MOBILE,
  MODEL_PURCHASED, PINCODE, STATE, DATE_OF_INVOICE,
  BATTERY_NUMBER, CHASSIS_NUMBER, MODEL_COLOR,
  FINANCE_THROUGH_BAJAJ, SUBMIT, YES, NO,
  MODEL_COLOR_JSON, SELECT_COLOR
} from '../../../constants/appConstants';
import * as formActions from '../redux/actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      customerMobile: '',
      modelPurchased: '',
      pincode: '',
      state: '',
      dateOfInvoice: '',
      batteryNumber: '',
      chassisNumber: '',
      checkedYes: true,
      checkedNo: false,
    }
  }

  changeHandler = (stateHolder, value) => {
    /**
     *  Updating states on changing input
     */
    let dataValue;
    dataValue = value && value.replace(/\s/g, '');
    this.setState({ [stateHolder]: dataValue });
  }

  onSelectCheckBox = (stateHolder) => {
    const { checkedYes, checkedNo} = this.state;
    if (stateHolder === 'Yes' && !checkedYes) {
      this.setState({
        checkedYes: true, checkedNo: false
      })
    } else if(stateHolder === 'No' && !checkedNo){
      this.setState({
        checkedYes: false, checkedNo: true
      })
    } 
  }

  onSubmit = () => {
    const { customerName, customerMobile, modelPurchased, pincode,
      state, dateOfInvoice, batteryNumber, chassisNumber,
      checkedYes, checkedNo
    } = this.state;
    const { actions: {setForm} } = this.props;
    const valid = customerName && customerMobile && modelPurchased && pincode
    && state && dateOfInvoice && batteryNumber && chassisNumber ? true : false
    const data = {
      customerName: customerName,
      customerMobile: customerMobile,
      modelPurchased: modelPurchased,
      pincode: pincode,
      state: state,
      dateOfInvoice: dateOfInvoice,
      batteryNumber: batteryNumber,
      chassisNumber: chassisNumber,
      checkedNo: checkedNo,
      checkedYes: checkedYes
    }
    debugger
    if (valid)
    {
      setForm(data)
      alert('details submitted successfully')
    } else {
      alert('please fill all the details')
    }
  }

  render() {
    const { customerName, customerMobile, modelPurchased, pincode,
      state, dateOfInvoice, batteryNumber, chassisNumber,
      checkedNo, checkedYes
    } = this.state;
    const { colors } = MODEL_COLOR_JSON;
    return (
      <ScrollView style={styles.container}>
       <HeaderComponent title={HEADER_TITLE} />
        <View style={styles.content}>
       
          <LabelComponent title={CUSTOMER_NAME} />
          <TextInputComponent
            onChangeText={(text) => { this.changeHandler('customerName', text) }}
            value={customerName}
            maxLength={100}
          />

          <LabelComponent title={CUSTOMER_MOBILE} />
          <TextInputComponent
          onChangeText={(text) => { this.changeHandler('customerMobile', text) }}
          value={customerMobile}
          keyboardType={'numeric'}
          maxLength={10}
          />

          <LabelComponent title={MODEL_PURCHASED} />
          <DateComponent
            onDateChange={(text) => { this.changeHandler('modelPurchased', text) }}
            date={modelPurchased}
          />

          <View style={styles.row}>
          <View style={styles.column}>
          <LabelComponent title={PINCODE} />
          <TextInputComponent
            onChangeText={(text) => { this.changeHandler('pincode', text) }}
            value={pincode}
            keyboardType={'numeric'}
            maxLength={6}
          />
          </View>
          <View style={styles.column}>
          <LabelComponent title={STATE} />
          <TextInputComponent
          onChangeText={(text) => { this.changeHandler('state', text) }}
          value={state}
          maxLength={100}
          />
          </View>
          </View>

          <LabelComponent title={DATE_OF_INVOICE} />
          <DateComponent
            date={dateOfInvoice}
            onDateChange={(text) => { this.changeHandler('dateOfInvoice', text) }}
          />

           <LabelComponent title={BATTERY_NUMBER} />
          <TextInputComponent
            onChangeText={(text) => { this.changeHandler('batteryNumber', text) }}
            value={batteryNumber}
            keyboardType={'numeric'}
            maxLength={100}
          />

          <LabelComponent title={CHASSIS_NUMBER} />
          <TextInputComponent
           onChangeText={(text) => { this.changeHandler('chassisNumber', text) }}
           value={chassisNumber}
           keyboardType={'numeric'}
           maxLength={100}
          />

          <LabelComponent title={MODEL_COLOR} />
          <DropDownComponent
            colors={colors}
          />

          <View style={[styles.row, {marginVertical:10}]}>
          <LabelComponent style={{alignSelf: 'center', flex:1}} title={FINANCE_THROUGH_BAJAJ} />
            <CheckboxComponent
              titleYes={YES}
              titleNo={NO}
              onPressYes={() => {this.onSelectCheckBox('Yes')}}
              onPressNo={() => {this.onSelectCheckBox('No')}}
              checkedYes={checkedYes}
              checkedNo={checkedNo}
            />
          </View>

        </View>
        <ButtonComponent title={SUBMIT} onPress={() => { this.onSubmit() }}/>
      </ScrollView>
    )
  }
}


function mapStateToProps(state) {
  return {
    mainState: state.MainReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...formActions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);