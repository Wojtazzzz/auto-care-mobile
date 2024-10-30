import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from '../../assets/icon.png';

const services = [
    {
        id: '1',
        icon: 'business',
        color: '#FDD7D6',
        title: 'Tarcze hamulcowe',
        description: '20/12/23',
    },
    {
        id: '2',
        icon: 'account-balance-wallet',
        color: '#FFECC5',
        title: 'Olej silnikowy',
        description: '08/09/20',
    },
];

export const Services = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Ostatnie serwisy</Text>
            <FlatList
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.serviceItem}>
                        <View style={styles.iconContainer}>
                            <Image source={Icon} style={styles.icon} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.link}>Szczegóły</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        width: "90%",
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "#F5F7FA"
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginRight: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#888',
    },
    link: {
        color: '#0066FF',
        fontSize: 14,
    },
});