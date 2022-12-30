import {FlatList, View} from "react-native";
import GoalItem from "../GoalItem/GoalItem";
import styles from "./Style";

export default function GoalList({courseGoals}) {
    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoals}
                renderItem={(itemData) => {
                    return <GoalItem itemData={itemData}/>
                }}/>
        </View>
    );
}