import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';
import Search from '../Search';
import Directions from '../Directions';

const Map = () => {

    const origin = {latitude: -20.3381832, longitude: -40.3156992};
    const destination = {latitude: -20.3411383, longitude: -40.320353};

    return(
        <SafeAreaView style={styles.container}>
            <MapView 
                style={{ flex: 1}}
                initialRegion={{
                    latitude: -20.3401243,
                    longitude: -40.3144894,
                    latitudeDelta: 0.0134,
                    longitudeDelta: 0.0143,
                }}
                showsUserLocation
                showsMyLocationButton
                loadingEnabled
            >
               { destination && (
                   <Directions 
                        origin={origin}
                        destination={destination}
                        onReady={() => {}}
                   />
               )} 
            </MapView>
            <Search />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Map;