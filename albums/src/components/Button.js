import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyles } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyles: {
    backgroundColor: '#FFF',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    fontSize: 16,
    fontWidth: '600',
    alignSelf: 'center',
    color: '#007AFF',
    paddingTop: 10,
    paddingBottom: 10

  }
};

export default Button;
