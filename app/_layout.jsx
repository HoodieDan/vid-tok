import { Button, Dimensions, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FeedScreen from '../screens/Feed';
import { useState } from 'react';

export default function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false)
  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible)
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <FeedScreen modalOpen={modalIsVisible} />
      <Button title='Open Modal' onPress={toggleModal} />
      {modalIsVisible && (
        <Modal visible={modalIsVisible} animationType='slide'>
          <SafeAreaView style={styles.modal}>
            <View style={styles.imageContainer}>
              <Image style={styles.tik} source={require('../assets/tik.png')} />
            </View>
            <View style={styles.tiktokContainer}>
              <Image style={styles.tiktok} source={require('../assets/tiktok.png')} />
            </View>
            <Text style={styles.header}>Video Scroll Demo!</Text>
            <Text style={styles.paragraph}>This is a Tiktok scroll demo application.</Text>
            <Pressable style={styles.closeModal} onPress={toggleModal}>
              <Text style={styles.closeModalText}>Preview!</Text>
            </Pressable>
          </SafeAreaView>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  paragraph: {
    fontSize: 16,
  },
  tiktokContainer: {
    marginTop: 50,
    marginBottom: 30, 
  },
  tiktok: {
    width: 200,
    height: 200, 
  },
  tik: {
    width: 200,
    height: 45,
  },
  closeModal: {
    backgroundColor: '#000',
    marginTop: 24,
    borderRadius: 8,
  },
  closeModalText: {
    fontSize: 24,
    fontWeight: '700',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: Dimensions.get('window').width * 0.3,
    paddingRight: Dimensions.get('window').width * 0.3,
    color: '#FFF',
  }
});
