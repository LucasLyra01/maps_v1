import React from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import Map from './Map';
import Search from './Search';

const Home = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Map />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;