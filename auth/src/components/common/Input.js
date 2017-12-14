import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { viewStyle, textStyle, inputStyles } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={inputStyles}
        underlineColorAndroid="#FFF"
        value={value}
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    height: 40,
    flex: 1,
    flexDirection: 'row'
  },
  inputStyles: {
    color: '#000',
    flex: 2,
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  }
};

export { Input };
