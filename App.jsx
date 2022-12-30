import {useState} from "react";
import {View} from 'react-native';
import GoalInput from "./components/GoalInput/GoalInput";
import ClearBtn from "./components/ClearBtn/ClearBtn";
import GoalList from "./components/GoalList/GoalList";
import styles from "./assets/AppStyle";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
            // This is the best way to update state, instead of just using the spread operator
            setCourseGoals(currentCourseGoals => [
                ...currentCourseGoals,
                // By passing an object like this FlatList will automatically grab the text/key values
                // no need to pass in a key value as a prop to the children
                {text: enteredGoalText, key: Math.random()}
            ]);
    }

    const clearGoalList = () => setCourseGoals([]);

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>

            <GoalList courseGoals={courseGoals}/>

            <ClearBtn clearGoalList={clearGoalList}/>
        </View>
    );
}