import {useState} from "react";
import {View} from 'react-native';
import GoalInput from "./components/GoalInput/GoalInput";
import ClearBtn from "./components/ClearBtn/ClearBtn";
import GoalList from "./components/GoalList/GoalList";
import styles from "./assets/AppStyle";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    return (
        <View style={styles.appContainer}>
            <GoalInput setCourseGoals={setCourseGoals}/>

            <GoalList
                courseGoals={courseGoals}
                setCourseGoals={setCourseGoals}
            />

            <ClearBtn setCourseGoals={setCourseGoals}/>
        </View>
    );
}