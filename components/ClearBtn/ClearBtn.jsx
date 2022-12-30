import {Button, View} from "react-native";
import styles from "./Style";

export default function ClearBtn({setCourseGoals}) {
    const clearGoalList = () => setCourseGoals([]);

    return (
        <View style={styles.clearGoalListBtn}>
            <Button title={'clear'} onPress={clearGoalList}/>
        </View>
    );
}