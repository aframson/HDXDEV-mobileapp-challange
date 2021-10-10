import React, { useState, useEffect } from 'react';
import { store } from './store'
import { Provider } from 'react-redux'
import IntroPage from './src/screens/introPage';
import { Asset } from 'expo-asset';
import { Text, View, } from 'react-native'


export default function App() {

  const [isReady, setIsReady] = useState(false);



   // loading and catching Assets
   // this is to allow large images to be loaded before rendering
   
  const _cacheResourcesAsync = async () => {

    console.log('loaidng assets...')

    const images = [
      require('./src/assets/1.jpg'),
      require('./src/assets/2.jpeg'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  const onload = async () => {
    _cacheResourcesAsync().then(() => {
      setIsReady(true)
      console.log('Assets loading finished')
    })
  }

  useEffect(() => {
    onload();
  }, [])



  if (isReady) {
    return (
      <Provider store={store}>
        <IntroPage />
      </Provider>
    )
  } else {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, textAlign: 'center' }}>
        <Text>Loading Assets ...</Text>
      </View>
    )
  }
}
