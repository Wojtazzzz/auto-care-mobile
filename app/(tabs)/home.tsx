import {StyleSheet, View} from 'react-native';
import {CarCard} from "../../components/ui/car-card";
import {Services} from "../../components/ui/services";

export default function Index() {
  return (
    <View style={styles.container}>
      <CarCard />
        <Services />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
