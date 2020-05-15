/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import {View,StyleSheet, Image as Img} from 'react-native';
import {Card, Text} from 'exoflex';

import { COLORS } from '../constants/colors';
import { widthPercentageToDP as wp } from '../helpers/responsive';

type Props = {
    id: string;
    uri: string;
    name: string;
    address: string;
    shortAddress: string;
};

function Image(props: Props) {
    let { 
        cardContainer, 
        contentContainer,
        textName,
        addressContainer,
        textAddress,
        descriptionContainer,
        commentContainer,
    } = styles;
    return (
        <Card style={cardContainer}>
            <Card.Content style={contentContainer} >
                <Img 
                    resizeMode= 'cover'
                    source={{ uri: props.uri}}
                    style={{ borderRadius: 8, width: wp('90%'), height: 280 }}
                 />
                 <View style={descriptionContainer} >
                    <Text style={textName}>{props.name}</Text>
                    <View style={addressContainer}>
                        <Img source={require('../../assets/images/location.png')} />
                        <View>
                            <Text style={textAddress}>{props.address}</Text>
                            <Text style={textAddress}>{props.shortAddress}</Text>
                        </View>
                     </View>
                 </View>
                 <View style={commentContainer}>
                    <Img source={require('../../assets/images/comment.png')} />
                 </View>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        margin:20,
        marginBottom: 30,
    },
    addressContainer: {
        flexDirection: 'row',
    },
    descriptionContainer: {
        position : 'absolute',
        bottom : 0,
        top : 180,
        left : 30,
        right : 0
    },
    textAddress: {
        fontSize: 20,
        color: COLORS.white,
        paddingStart: 10,
        fontWeight: '400'
    },
    textName: {
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: '500',
        color: COLORS.white
    },
    commentContainer: {
      backgroundColor: COLORS.mandy,
      borderRadius: 40,
      paddingHorizontal: 7,
      paddingVertical: 13,
      width: 55,
      height: 55,
      position: 'absolute',
      top: '93%',
      left: '88%',
    },
});

export default Image;
