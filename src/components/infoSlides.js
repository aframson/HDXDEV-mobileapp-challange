import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity, Animated, FlatList } from 'react-native'
import config from '../config/index'
const { width, height } = Dimensions.get('window')
import { Ionicons } from '@expo/vector-icons';



const InfoSlides = () => {

    let [val, setVal] = useState(0)
    let flatlist = null;


    const [scrollX, setScrollX] = useState(new Animated.Value(0))

    // next button to move slides info
    const Next = () => {
        let c = val;
        flatlist.scrollToIndex({ index: c += 1, animated: true })
        setVal(val + 1);
    };

    // back button to move slides info
    const Back = () => {
        let c = val;
        flatlist.scrollToIndex({ index: c -= 1, animated: true })
        setVal(val - 1);
    };



    // index animation 
    const index1 = scrollX.interpolate({
        inputRange: [0, width, width * 2, width * 3],
        outputRange: [config.color.secondary, '#eee', '#eee', '#eee'],
        extrapolate: 'clamp',
    });
    const index2 = scrollX.interpolate({
        inputRange: [0, width, width * 2, width * 3],
        outputRange: ['#eee', config.color.secondary, '#eee', '#eee'],
        extrapolate: 'clamp',
    });
    const index3 = scrollX.interpolate({
        inputRange: [0, width, width * 2, width * 3],
        outputRange: ['#eee', '#eee', config.color.secondary, '#eee'],
        extrapolate: 'clamp',
    });

    const indexShape1 = scrollX.interpolate({
        inputRange: [0, width, width * 2, width * 3],
        outputRange: [35, 15, 15, 15],
        extrapolate: 'clamp',
    });
    const indexShape2 = scrollX.interpolate({
        inputRange: [0, width, width * 2, width * 3],
        outputRange: [15, 35, 15, 15],
        extrapolate: 'clamp',
    });
    const indexShape3 = scrollX.interpolate({
        inputRange: [0, width, width * 2, width * 3],
        outputRange: [15, 15, 35, 15],
        extrapolate: 'clamp',
    });


    return (
        <View style={styles.container}>
            <View style={styles.rotatedBox} />

            <FlatList
                style={{ position: 'absolute', width: width, height: height / 3, marginTop: 30 }}
                ref={ref => (flatlist = ref)}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                horizontal
                data={config.data}
                keyExtractor={(item) => item.id.toString()}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                renderItem={({ item, index }) => (
                    <View style={styles.slidebox}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.greenLittleCurvedBox}>
                            <Text style={styles.sub}>{item.subTitle}</Text>
                        </View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>

                )}
            />

                    
            {val == 2 ?(
                <TouchableOpacity onPress={() => Back()} style={styles.nextButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => Next()} style={styles.nextButton}>
                    <Ionicons name="arrow-forward" size={24} color="white" />
                </TouchableOpacity>
            )}


            
            <View style={styles.indexContainer}>
                <Animated.View style={{ margin: 10, borderRadius: 100, height: 15, width: indexShape1, backgroundColor: index1 }} />
                <Animated.View style={{ margin: 10, borderRadius: 100, height: 15, width: indexShape2, backgroundColor: index2 }} />
                <Animated.View style={{ margin: 10, borderRadius: 100, height: 15, width: indexShape3, backgroundColor: index3 }} />
            </View>

        </View>
    )
}

export default InfoSlides

const styles = StyleSheet.create({
    indexContainer: {
padding: 15,
width: 'auto',
flexDirection: 'row',
position: 'absolute',
marginTop: 320,
alignSelf: 'center',
    },
    nextButton: {
        height: 70,
        width: 70,
        backgroundColor: config.color.secondary,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 260,
        borderRadius: 50,
    },
    container: {
        bottom: 40,
        position: 'absolute',
        height: height / 2,
        flex: 0.6
    },
    description: {
        color: 'white',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    sub: {
        fontSize: Platform.OS === 'ios' ? 27 : 22,
        color: 'white',
        fontWeight: 'bold',
    },
    greenLittleCurvedBox: {
        backgroundColor: config.color.green,
        padding: 10,
        width: 'auto',
        alignSelf: 'center',
        transform: [{ rotate: '-1deg' }],
    },
    title: {
        fontSize: Platform.OS === 'ios' ? 28 : 25,
        color: config.color.secondary,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    slidebox: {
        width,
        alignSelf: 'center',
    },
    rotatedBox: {
        width: width + 100,
        backgroundColor: config.color.primary,
        height: height / 1.7,
        transform: [{ rotate: '-190deg' }],
        marginLeft: '-22%',
        marginTop: height / 12,
        borderRadius: 30
    }
})
