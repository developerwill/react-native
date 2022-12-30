import {TextInput, View, Button} from "react-native";
import styles from "./Style";
import {useState} from "react";

export default function GoalInput({setCourseGoals}) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => setEnteredGoalText(enteredText);

    const addGoalHandler = () => {
        if (enteredGoalText.trim() !== '') {
            // This is the best way to update state, instead of just using the spread operator
            setCourseGoals(currentCourseGoals => [
                ...currentCourseGoals,
                // By passing an object like this FlatList will automatically grab the text/key values
                // no need to pass in a key value as a prop to the children
                {text: enteredGoalText, id: Math.random().toString()}
            ]);
        }

        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={'Your course goal'}
                onChangeText={goalInputHandler}
                value={enteredGoalText}/>
            <Button title={'Add Goal'} onPress={addGoalHandler}/>
        </View>
    );
}