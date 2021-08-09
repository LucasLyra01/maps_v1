import React from 'react';
import { Platform, SafeAreaView } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { googleConfig } from '../../app.json'

const Search = ( props ) => {

    const { onLocationSelected } = props;

        return(
            <GooglePlacesAutocomplete 
                placeholder="Para onde?"
                placeholderTextColor="#333"
                onPress={ onLocationSelected }
                query={{
                    key: googleConfig,
                    language: 'pt-BR'
                }}
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
                fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 60, android: 30}),
                        width: '100%'
                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        borderRadius: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingRight: 20,
                        paddingLeft: 20,
                        marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        elevation: 5,
                        borderWidth: 1,
                        borderColor: '#DDD',
                        fontSize: 18,
                    },
                    listView: {
                        borderWidth: 1,
                        borderColor: "#DDD",
                        backgroundColor: "#FFF",
                        marginHorizontal: 20,
                        elevation: 5,
                        marginTop: 10
                    },
                    description: {
                        fontSize: 14,
                    },
                    row: {
                        padding: 20,
                        height: 58
                    }
                }}
            />
        )
}

export default Search;