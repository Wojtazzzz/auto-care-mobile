import { StyleSheet, View } from 'react-native';
import {CarCard} from "../../components/ui/car-card";

export default function Index() {
  return (
    <View style={styles.container}>
      <CarCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
