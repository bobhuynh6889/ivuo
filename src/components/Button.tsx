import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
interface customButtonProps {
  backgroundColor?: any;
  onPress?: Function | any;
  text: string;
  disabled?: boolean | false;
  stylesText: any;
  viewStyle?: any;
}

export default function Button({
  backgroundColor,
  onPress,
  text,
  disabled,
  stylesText,
  viewStyle,
}: customButtonProps) {
  const txtBackgroundColor = {backgroundColor: backgroundColor};

  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity
        disabled={disabled || false}
        onPress={onPress}
        style={[styles.container, txtBackgroundColor, viewStyle]}>
        <Text style={stylesText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
