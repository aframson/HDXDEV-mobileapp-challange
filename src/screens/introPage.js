import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native'
import UserInfo from '../components/userInfo'
import InfoSlides from '../components/infoSlides'
// getting the dimensions of the screen
const { width, height } = Dimensions.get('window');

const IntroPage = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.imageContainer}>
                <Image style={{ height: null, width: null, flex: 1 }} source={require('../assets/2.jpeg')} />
            </View>
            <View style={styles.fade} />
            <UserInfo />
            <InfoSlides />
        </View>
    )
}


const styles = StyleSheet.create({
    fade: {
        width: width,
        height,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.7,
    },
    imageContainer: {
        width,
        height: height - 200,
        position: 'absolute',
    },
    backgroundImage: {
        width: null,
        height: null,
        flex: 1,
    }
})


export default IntroPage


