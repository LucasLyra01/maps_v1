import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { googleConfig } from '../../app.json';

const Directions = ({ destination, origin, onReady}) => {
    return(
        <MapViewDirections 
            destination={destination}
            origin={origin}
            onReady={onReady}
            apikey={googleConfig}
            strokeWidth={3}
            strokeColor="#222"
        />
    );  
}

export default Directions;