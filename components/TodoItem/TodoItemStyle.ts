import { StyleSheet, TextStyle } from 'react-native'


interface Styles {
    item: TextStyle
}

export default StyleSheet.create<Styles>({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})