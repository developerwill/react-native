import {useState} from "react";
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const addGoalHandler = () => {
        // This is the best way to update state, instead of just using the spread operator
        setCourseGoals(currentCourseGoals => [
            ...currentCourseGoals,
            // By passing an object like this FlatList will automatically grab the text/key values
            // no need to pass in a key value as a prop to the children
            {text: enteredGoalText, key: Math.random()}
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Your course goal'}
                    onChangeText={goalInputHandler}/>
                <Button title={'Add Goal'} onPress={addGoalHandler}/>
            </View>

            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.goalItem}>
                                <Text style={styles.goalText}>{itemData.item.text}</Text>
                            </View>
                        );
                    }} alwaysBounceVertical={false}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 5
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        color: 'white'
    }
});
