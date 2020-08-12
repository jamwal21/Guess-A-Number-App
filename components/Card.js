import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({children,style}) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        elevation:8,
        padding:20,
        borderRadius:10
    }
   });

export default Card
