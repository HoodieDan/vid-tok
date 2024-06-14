import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text>Saved</Text>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});