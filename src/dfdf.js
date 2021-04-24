import React, { useState } from 'react';
import { Text, Button, TextInput, View } from 'react-native';

export const PizzaTranslator = () => {
  let [a, setText] = useState('');
  let [b, setTextb] = useState('');
  return (
    <View>
      <TextInput
        style={{width: 200,
          height: 30,
          borderWidth: 2,
          borderColor: '#9966CC',
          borderRadius: 10,
          textAlign: 'center',
          fontSize: 20,
          color: '#003153',
          marginBottom: 10}} 
        keyboardType='numeric' 
        placeholder="Введите a"
        onChangeText={text => setText(text)}
        defaultValue={a}
      />
      <TextInput
        style={{width: 200,
          height: 30,
          borderWidth: 2,
          borderColor: '#9966CC',
          borderRadius: 10,
          textAlign: 'center',
          fontSize: 20,
          color: '#003153',
          marginBottom: 10}} 
        keyboardType='numeric'
        placeholder="Введите b"
        onChangeText={text => setTextb(text)}
        defaultValue={b}
      />
      <Button 
            title="Расчет" 
            onPress={() => { 
              if(a%b==0){
                alert("Эти числа делются");
              }
              else{
                let z;
                z = a%b
                alert("Остаток: "+ z)
              }
            }}
            />
    </View>
  );
}
