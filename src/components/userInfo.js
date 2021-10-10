import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { increseFollow, decreseFollow } from '../../slices/followCounter'
import { useSelector, useDispatch } from 'react-redux';
const { width } = Dimensions.get('window')
import { Ionicons } from '@expo/vector-icons';
import config from '../config'


const UserInfo = () => {

    // getting the follow state from redux store
    const follow = useSelector(state => state.followCount.follow)
    const dispatch = useDispatch()


    // The user data
    const userData = {
        name: 'Lois Adjeey Annan',
        profileImage: require('../assets/1.jpg'),
        projects: '137',
        followers: follow,
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="chevron-back" size={34} color="white" />
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image style={{ height: null, width: null, flex: 1 }} source={userData.profileImage} />
            </View>
            <Text style={styles.name}>{userData.name}</Text>

            <View style={styles.infoConatainer}>
                <View style={styles.infobox}>
                    <Text style={styles.textCount}>{userData.projects}</Text>
                    <Text style={styles.countTitle}>Projects</Text>
                </View>

                <View style={styles.infobox}>
                    <Text style={styles.textCount}>{userData.followers}</Text>
                    <Text style={styles.countTitle}>Followers</Text>
                </View>

                <View style={styles.infobox}>
                    {follow > 0 ? (
                        <TouchableOpacity onPress={() => dispatch(decreseFollow())} style={[styles.followButton, { backgroundColor: 'red' }]}>
                            <Text style={styles.followTxt}>UnFollow</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => dispatch(increseFollow())} style={styles.followButton}>
                            <Text style={styles.followTxt}>Follow</Text>
                        </TouchableOpacity>
                    )}

                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    countTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
    textCount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    followTxt: {
        color: '#fff',
        fontWeight: 'bold',
    },
    followButton: {
        backgroundColor:config.color.secondary,
        padding: 10,
        width: '100%',
        borderRadius: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'

    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 20,
        color: 'white'
    },
    infobox: {
        flex: 1 / 3,
        alignItems: 'center',
        padding: 10
    },
    infoConatainer: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
    },
    imageContainer: {
        height: 120,
        width: 120,
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: '#fff',
    },
    container: {
        flex: 0.4,
        position: 'absolute',
        zIndex: 50,
        width,
        alignSelf: 'center',
        height: 'auto',
        // marginTop: 10,
        padding: 20,
        zIndex: 999,
    }
})

export default UserInfo

