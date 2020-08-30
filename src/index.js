import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';

import Main from './components/Main/main/main';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F1F1' }}>
        <StatusBar barStyle="light-content" backgroundColor={'#F2F1F1'}/>
         <Main/>
        </SafeAreaView>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;

Text.defaultProps = {}
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {}
TextInput.defaultProps.allowFontScaling = false;