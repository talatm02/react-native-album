import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { 
        headerContentStyle, 
        thumbnailStyle, 
        textStyle, 
        thumbnailContainerStyle, 
        imageStyle
     } = styles;
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={textStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
