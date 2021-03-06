import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, Image } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { FeatureButton } from '@src/components/FeatureButton';
import { getImageByInfo, getImageIfCached } from '@src/services/LocalImageService';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const IMAGE_INFO = {
    id: 1,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/220px-Google_Images_2015_logo.svg.png'
}

const MasterScreen = (props: Props) => {
    const [imageSource, setImageSource] = useState(getImageIfCached(IMAGE_INFO));


    useEffect(() => {
        if (!imageSource) {
            getImageByInfo(IMAGE_INFO, setImageSource);
        }
    }, []);




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Placeholder</Text>
                <Image style={{ width: 200, height: 50 }}
                    source={imageSource} resizeMode={'cover'} />
            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }