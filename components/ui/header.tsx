import {View, StyleSheet, Text} from "react-native";
import Constants from 'expo-constants';

type HeaderProps = {
    name: string
};

export const Header = ({name}: HeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        height: 72,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
