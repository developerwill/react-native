import {Pressable, Text, View} from "react-native";
import styles from "./Style";

function GoalItem({itemData, onDelete}) {
    return (
        <Pressable onPress={onDelete.bind(this, itemData.item.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;