import {FlatList, View} from "react-native";
import GoalItem from "../GoalItem/GoalItem";
import styles from "./Style";

export default function GoalList({courseGoals, setCourseGoals}) {
    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            // Iterates array and filters/removes the goal with the id
            return currentCourseGoals.filter((goal) => goal.id !== id)
        });
    }

    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoals}
                renderItem={(itemData) => {
                    return <GoalItem itemData={itemData} onDelete={deleteGoalHandler}/>
                }}/>
        </View>
    );
}