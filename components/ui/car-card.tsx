import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export const CarCard = () => {
    return (
        <LinearGradient
            colors={['#4a90e2', '#6bb4ff']}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            style={styles.container}
        >
            <View style={styles.topBar}>
                <Text style={styles.type}>Pojazd główny</Text>
                <Text style={styles.link}>pozostałe</Text>
            </View>
            <Text style={styles.name}>Volkswagen Passat</Text>
            <View style={styles.info}>
                <Text style={styles.infoName}>Przegląd do</Text>
                <Text style={styles.infoName}>Ubezpieczenie do</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.date}>01/01/24</Text>
                <Text style={styles.date}>01/01/24</Text>
            </View>
            <Text style={styles.vin}>WBAAA000000000000</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4a90e2',
        borderRadius: 15,
        padding: 20,
        width: '90%',
        alignSelf: 'center',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    type: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        color: 'white',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    name: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 12,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    infoName: {
        color: 'white',
        fontSize: 12,
        opacity: 0.8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    vin: {
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        letterSpacing: 2,
    },
});
