import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyles } = styles;

  return (
    <View style={viewStyles}>
      <Text style={textStyle}>Albums!!!!!!!!!!</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 200 },
    // shadowOpacity: 0.3,
    elevation: 10
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
