import {useState} from "react";
import {Button, View} from 'react-native';
import GoalInput from "./components/GoalInput/GoalInput";
import ClearBtn from "./components/ClearBtn/ClearBtn";
import GoalList from "./components/GoalList/GoalList";
import styles from "./assets/AppStyle";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const showAddNewGoalModal = () => setModalIsVisible(true);
    const hideAddNewGoalModal = () => setModalIsVisible(false);

    return (
        <View style={styles.appContainer}>
            <Button
                title={'Add new goal'}
                color={'#5e0acc'}
                onPress={showAddNewGoalModal}
            />

            <GoalInput
                setCourseGoals={setCourseGoals}
                visible={modalIsVisible}
                hideModal={hideAddNewGoalModal}
            />

            <GoalList
                courseGoals={courseGoals}
                setCourseGoals={setCourseGoals}
            />

            <ClearBtn setCourseGoals={setCourseGoals}/>
        </View>
    );
}