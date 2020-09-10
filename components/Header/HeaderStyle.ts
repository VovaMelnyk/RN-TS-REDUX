import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    header: ViewStyle,
    title: TextStyle,
}

export default StyleSheet.create<Styles>({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: 'coral'
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})