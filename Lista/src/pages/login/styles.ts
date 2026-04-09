import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxTop:{
        width: '100%',
        height: Dimensions.get('window').height / 3,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },

    boxMid:{
        width: '100%',
        height: Dimensions.get('window').height / 4,
        // backgroundColor: 'green',
        paddingHorizontal: 37,
    },

    boxBottom:{
        width: '100%',
        height: Dimensions.get('window').height / 3,
        // backgroundColor: 'blue',
    },

    logo:{
        width: 80,
        height: 80,
    },

    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,
    },

    titleInput:{
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20,
    }
});