import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React from 'react';

export default function OnboardingItem({ item }) {
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width}]}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={[styles.image, { width, height: height * 0.5, resizeMode: 'contain' }]} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginVertical: 20,
        justifyContent: 'center',
    },
    imageContainer:{
        backgroundColor: 'red',
    },
    textContainer: {
        flex: 0.3,
        marginTop: 20,
        alignItems: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#681907',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },
    description: {
        fontWeight: '400',
        fontSize: 16,
        color: '#62656b',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
});
