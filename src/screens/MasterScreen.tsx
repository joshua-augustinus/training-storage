import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, Image, Alert } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { getImageByInfo, getImageIfCached, loadImageKeysFromStorage } from '@src/services/LocalImageService';
import { ImageContainer } from '@src/components/ImageContainer';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}


const MasterScreen = (props: Props) => {
    const [isStorageLoaded, setIsStorageloaded] = useState(false)

    useEffect(() => {
        setup();
    }, []);

    const setup = async () => {
        const result = await loadImageKeysFromStorage();
        if (result) {
            Alert.alert("Images were loaded from storage");
        } else {
            Alert.alert("No image keys in storage");
        }

        setIsStorageloaded(true);
    }


    if (isStorageLoaded) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageContainer />
            </SafeAreaView>

        );
    } else {
        return (
            <Text>Loading from storage...</Text>
        )
    }



}

MasterScreen.navigationOptions = {}

export { MasterScreen }