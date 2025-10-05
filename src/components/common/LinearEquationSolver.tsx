import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const LinearEquationSolver = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const solveEquation = () => {
    const numberA = parseFloat(a);
    const numberB = parseFloat(b);
    if (isNaN(numberA) || isNaN(numberB)) {
      setResult('Vui lòng nhập số hợp lệ!');
      return;
    }

    if (numberA === 0 && numberB === 0) {
      setResult('Phương trình vô số nghiệm');
    } else if (numberA === 0 && numberB !== 0) {
      setResult('Phương trình vô nghiệm');
    } else {
      setResult(`Nghiệm x = ${(-numberB / numberA).toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc nhất: ax + b = 0</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <Button title="Giải" onPress={solveEquation} />

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LinearEquationSolver;
