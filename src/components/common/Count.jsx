import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Counter</Text>
      <Text style={styles.number}> {count} </Text>
      <View style={styles.buttonContainer}>
        <Button title="-" onPress={() => setCount(count - 1)}></Button>
        <Button title="+" onPress={() => setCount(count + 1)}></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  number: {
    fontSize: 40,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default Count;
