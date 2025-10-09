import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const Child = ({name, age, onSend}) => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');

  return (
    <View>
      <Text>
        Cha gửi xuống: {name} - {age}
      </Text>

      <TextInput
        placeholder="Tên từ con"
        value={childName}
        onChangeText={setChildName}
      />
      <TextInput
        placeholder="Tuổi từ con"
        value={childAge}
        onChangeText={setChildAge}
        keyboardType="numeric"
      />
      <Button
        title="Gửi lên cha"
        onPress={() => onSend({name: childName, age: Number(childAge)})}
      />
    </View>
  );
};

export default Child;
