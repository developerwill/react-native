import {TextInput, View, Button} from "react-native";
import styles from "./Style";
import {useState} from "react";

export default function GoalInput({onAddGoal}) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => setEnteredGoalText(enteredText);

    const addGoalHandler = () => {
        if (enteredGoalText.trim() !== '')
            onAddGoal(enteredGoalText);

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