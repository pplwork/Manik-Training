import React, { useState } from 'react';
import { View,Text , StyleSheet, TextInput , Button,TouchableWithoutFeedback ,Keyboard ,Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
const StartGameScreen = (props)=>{
    const [enteredValue , setEnteredValue] = useState('');
    const [confirmed , setConfirmed] = useState(false);
    const [selectedNumber , setSelectedNumber] = useState();
    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler=()=>{
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid number!' ,'Number has to be a number between 1 and 99',[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue('');
        Keyboard.dismiss();
    }
    let confirmedOutput;
    if(confirmed){
        confirmedOutput=
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={()=>{props.onStartGame(selectedNumber)}}/>
            </Card>
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.screen} >
            <Text>Start a New Game</Text>

            {/* <View style={styles.inputContainer}> */}
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <Input style = {styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2}
                onChangeText ={numberInputHandler}
                value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <Button title="Reset" onPress={resetInputHandler} color="#c717fc"/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Confirm" onPress={confirmInputHandler} color="#f7287b"/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 15

    },
    btn:{
        width: '40%'
    },
    input:{
        width:50,
        textAlign: 'center'
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
});
export default StartGameScreen;