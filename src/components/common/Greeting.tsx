import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

const Greeting = ({name, age}) => {
  const sayHello = () => {
    Alert.alert(`Hello ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello {name}, {age}
      </Text>
      <Button title="Say Hello" onPress={sayHello} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Greeting;
