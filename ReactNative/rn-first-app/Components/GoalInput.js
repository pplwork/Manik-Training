import React from 'react'
import {View , Text ,StyleSheet ,TextInput ,Button ,Modal} from 'react-native'
const GoalInput = props=>{
    return(<Modal visible={props.visible} animationType="slide"><View style={styles.inputContainer}>
        <TextInput placeholder="Course goal" style={styles.input} onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
        />
        <View style={styles.btnWrapper}>
            <View style={styles.btn}>
                <Button title="CANCEL" color="red" onPress={props.cancelAddGoalHandler}/>
            </View>
            <View style={styles.btn}>
                <Button title="ADD" onPress={props.addGoalHandler}/>
            </View>        
        </View>
    </View>
    </Modal>);
};
const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent:'center' ,
        alignItems:'center'
    },
    input:{
        borderColor:'black',
        width:'80%',
        borderWidth:1 , 
        padding:10,
        marginBottom: 10
    },
    btnWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    btn: {
        width: '40%'
    }
});

export default GoalInput;
