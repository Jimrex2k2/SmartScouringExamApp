import { ScrollView } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const movieDetails = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>
                    Details
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default movieDetails;