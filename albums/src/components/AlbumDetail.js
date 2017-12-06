import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = album => (
    <View>
      <Text>{album.title}</Text>
    </View>
  );

export default AlbumDetail;
