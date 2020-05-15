/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';
import { TextInput } from 'exoflex';

import { COLORS } from '../constants/colors';

type Props = React.ComponentProps<typeof TextInput> & { 
    icon: ImageSourcePropType,
    name: string 
};

function TextInputLiveIcon(props: Props) {
    let { style,name, icon, ...otherProps } = props;
    let { containerTextInput, container, wrapInput} = styles;
    return (
        <View style={[container, style]}>
            <View style={wrapInput}>
                <Image source={icon} style={{ width: 38, height: 38}} />
                <TextInput 
                    placeholder={name} 
                    containerStyle={containerTextInput}
                    autoCapitalize="none"
                    secureTextEntry={name === 'password'} 
                    {...otherProps}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapInput: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#eaeaea',
        height: 60,
        borderRadius: 8,
    },
    containerTextInput: {
       height: 50,
       width: '75%',
       marginVertical: 10,
       borderColor: COLORS.white
    }
});

export default TextInputLiveIcon;
