import {Pressable, Text, View} from "react-native";
import styles from "./Style";

function GoalItem({itemData, onDelete}) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#210644'}}
                onPress={onDelete.bind(this, itemData.item.id)}
            >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;