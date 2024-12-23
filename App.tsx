import React from 'react'
import { Provider } from 'react-redux'
// import {PersistGate} from 'redux-persist/integration/react';
import { store } from './src/redux/store'
import RootNavigator from './src/routes/RootNavigator'

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
      </PersistGate> */}
      <RootNavigator />
    </Provider>
  )
}
export default App
