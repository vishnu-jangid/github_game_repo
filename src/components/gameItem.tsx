import  React from 'react';
import { View, Text, ToastAndroid, TouchableOpacity, Image } from 'react-native';

import styles from './style';

interface GameItemProps {
  fullyOptimized: boolean;
  genre: string | null;
  highlightsSupported: boolean;
  id: number | null;
  publisher: string | null;
  status: string | null;
  steamUrl: string | null;
  title: string | null;
}

const GameItem = (props: GameItemProps) => {
  
  const showToast = (title: string) => {
    ToastAndroid.show(title, ToastAndroid.SHORT);
  };
  
  let imageId = props?.steamUrl !== '' ? props?.steamUrl?.substring(props?.steamUrl.lastIndexOf("/") + 1, props?.steamUrl?.length) : '';
  
  return (
    <View style={styles.container}>
      {imageId !== "" && (
        <Image
          source={{
            uri: `${`https://steamcdn-a.akamaihd.net/steam/apps/${imageId}/library_600x900_2x.jpg`}`,
          }}
          style={styles.image}
        />
      )}
      <TouchableOpacity onPress={() => showToast(props?.title)}>
        <Text>{props?.title ?? ""}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameItem;