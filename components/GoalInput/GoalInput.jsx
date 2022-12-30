import {TextInput, View, Button, Modal, Image} from "react-native";
import styles from "./Style";
import {useState} from "react";

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => setEnteredGoalText(enteredText);

    const addGoalHandler = () => {
        if (enteredGoalText.trim() !== '') {
            // This is the best way to update state, instead of just using the spread operator
            props.setCourseGoals(currentCourseGoals => [
                ...currentCourseGoals,
                // By passing an object like this FlatList will automatically grab the text/key values
                // no need to pass in a key value as a prop to the children
                {text: enteredGoalText, id: Math.random().toString()}
            ]);
        }

        props.hideModal();
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/adaptive-icon.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Your course goal'}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={'Cancel'} onPress={props.hideModal}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Add Goal'} onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}