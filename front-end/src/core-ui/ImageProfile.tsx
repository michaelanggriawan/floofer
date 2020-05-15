/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Card, Avatar } from 'exoflex';

import { COLORS } from '../constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as dp } from '../helpers/responsive';

type Source = {
    id: string;
    uri: string;
}

type Props = {
    uri: string;
    name: string;
    location: string;
    bio: string;
    likes: Array<Source>;
    actionReject: () => void;
    actionRefresh: () => void;
    actionlike: () => void;
    actionExit: () => void;
}

function ImageProfile(props: Props) {
    let { 
        container, 
        nameText,
        addressText,
        addressContainer, 
        bioText,
        bioContainer,
        likedText,
        ImageLikedContainer,
        exitContainer,
        buttonStyle,
        divider
    } = styles;
    return (
        <ScrollView>
            <Card style={container}>
                <Card.Cover 
                    source={{
                        uri: props.uri
                    }}
                    style={{ marginTop:50, width: wp('100%'), height: dp('50%') }}
                />
                <Card.Content>
                    <View style={exitContainer}>
                        <Avatar.Image 
                            source={require('../../assets/images/exit.png')}
                            size={60}
                            style={{ backgroundColor: COLORS.mandy }}
                        />
                    </View>
                    <View>
                        <Text style={nameText}>{props.name}</Text>
                        <View style={addressContainer}>
                            <Image 
                                source={require('../../assets/images/location.png')} />
                            <Text style={addressText}>{props.location}</Text>
                        </View>
                        <View style={divider}/>
                        <View style={bioContainer} >
                            <Text style={bioText} >{props.bio}</Text>
                        </View>
                        <View style={divider}/>
                        <View>
                            <Text style={likedText} >Likes</Text>
                            <View style={ImageLikedContainer}>
                                <FlatList 
                                    data={props.likes}
                                    renderItem={({ item }) => (
                                        <Avatar.Image source={{uri: item.uri }} size={40} />
                                    )}
                                    keyExtractor={item => item.id }
                                />
                            </View>
                            <View style={styles.actionContainer}>
                                <TouchableWithoutFeedback onPress = {() => {}}>
                                    <Avatar.Image 
                                        source={require('../../assets/images/exitPink.png')}
                                        size={60}
                                        style={buttonStyle}
                                    />
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress = {() => {}}>
                                    <Avatar.Image 
                                        source={require('../../assets/images/refresh.png')}
                                        size={60}
                                        style={buttonStyle}
                                    />
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress = {() => {}}>
                                    <Avatar.Image 
                                        source={require('../../assets/images/love.png')}
                                        size={60}
                                        style={buttonStyle}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'center',
    },
    addressContainer: {
        flexDirection: 'row',
    },
    bioContainer:{
        paddingRight: 10,
        paddingLeft:10
    },
    nameText: {
        fontSize: 30,
        fontWeight: '500'
    },
    addressText: {
        fontSize: 25,
    },
    ImageLikedContainer: {
        paddingLeft: 10,
        paddingTop: 5,
    },
    exitContainer: {
        position: 'absolute',
        top: '-9%',
        left: '85%',
    },
    actionContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonStyle: {
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6, 
        elevation: 8,
    },
    bioText: {
        fontSize: 20,
        textAlign: 'left'
    },
    likedText: {
        fontSize: 20,
        paddingLeft: 10,
    },
    divider: {
        borderWidth: 1,
        borderColor: COLORS.mercury,
        marginTop: 20,
        marginBottom: 20,
    }
});

export default ImageProfile;
