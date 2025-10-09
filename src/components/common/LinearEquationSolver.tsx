import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const LinearEquationSolver = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const [fieldToFocus, setFieldToFocus] = useState(null);

  const aInputRef = useRef(null);
  const bInputRef = useRef(null);

  useEffect(() => {
    if (fieldToFocus && fieldToFocus.current) {
      fieldToFocus.current.focus();
      setFieldToFocus(null);
    }
  }, [fieldToFocus]);

  const solveEquation = () => {
    const numberA = parseFloat(a);
    const numberB = parseFloat(b);

    const isAInvalid = isNaN(numberA);
    const isBInvalid = isNaN(numberB);
    const errors = [];

    if (isAInvalid) {
      errors.push('Giá trị "a" phải là một số mày hiểu không.');
    }
    if (isBInvalid) {
      errors.push('Giá trị "b" phải là một số.');
    }

    if (errors.length > 0) {
      setResult(errors.join('\n'));

      if (isAInvalid && isBInvalid) {
        setA('');
        setB('');
        setFieldToFocus(aInputRef);
      } else if (isAInvalid) {
        setA('');
        setFieldToFocus(aInputRef);
      } else if (isBInvalid) {
        setB('');
        setFieldToFocus(bInputRef);
      }
      return;
    }

    setResult('');
    if (numberA === 0) {
      if (numberB === 0) {
        setResult('Phương trình vô số nghiệm');
      } else {
        setResult('Phương trình vô nghiệm');
      }
    } else {
      setResult(`Nghiệm x = ${(-numberB / numberA).toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc nhất: ax + b = 0</Text>

      <TextInput
        ref={aInputRef}
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        ref={bInputRef}
        style={styles.input}
        placeholder="Nhập hệ số b"
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
    textAlign: 'center',
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
