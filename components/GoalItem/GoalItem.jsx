import {Text, View} from "react-native";
import styles from "./Style";

function GoalItem({itemData}) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    );
}

export default GoalItem;