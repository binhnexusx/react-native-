import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [childData, setChildData] = useState({name: '', age: null});

  return (
    <View>
      <TextInput placeholder="Tên từ cha" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Tuổi từ cha"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Text>
        Con gửi lên: {childData.name} - {childData.age}
      </Text>

      <ChildComponent
        name={name}
        age={age}
        onSend={data => setChildData(data)}
      />
    </View>
  );
};

export default ParentComponent;
