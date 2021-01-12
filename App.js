
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Alert, Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export default function App() {
  let rob = 'rwandan';
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" width={100} color="orange" onPress={()=> Alert.alert("myTitle","robert pressed a button")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
