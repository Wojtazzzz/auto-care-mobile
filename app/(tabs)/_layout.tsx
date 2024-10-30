import {Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Header} from "../../components/ui/header";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    header: () => (<Header name="Dashboard"/>),
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
        </Tabs>
    );
}