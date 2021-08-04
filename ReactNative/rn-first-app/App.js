import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button ,TextInput ,ScrollView ,FlatList} from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [enteredGoal , setEnteredGoal] =useState('');
  const [courseGoals , setCourseGoals] = useState([]);
  const [isAddMode , setIsAddMode] = useState(false);
  const goalInputHandler=(enteredText)=>{
    setEnteredGoal(enteredText);
  }
  const addGoalHandler=()=>{
    setCourseGoals(currentGoals=>[...currentGoals , {key: Math.random().toString() , value: enteredGoal}]);
    setIsAddMode(false);
    setEnteredGoal('');
  }
  const removeGoalHandler=(goalId)=>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.key!==goalId);
    })
  }
  const cancelAddGoalHandler =()=>{
    setIsAddMode(false);
  }
  return (
    <>
    {/* <StatusBar/> */}
    <View style={styles.screen} >
      <Button title="Add new Goal" onPress={()=>{setIsAddMode(true)}}/>
      <GoalInput visible={isAddMode} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} enteredGoal={enteredGoal} cancelAddGoalHandler={cancelAddGoalHandler}/>
      {/* <ScrollView>
      {courseGoals.map((goal)=><View style={styles.listItem} key={goal}><Text >{goal}</Text></View>)}
      </ScrollView> */}
      <FlatList data={courseGoals} renderItem={itemData=> <GoalItem onDelete={removeGoalHandler.bind(this,itemData.item.key)} title={itemData.item.value}/>}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
    },
});
