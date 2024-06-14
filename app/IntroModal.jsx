import { Button, Dimensions, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function IntroModal (props) {
  return (
    <Modal visible={props.modalIsVisible} animationType='slide'>
        <SafeAreaView style={styles.modal}>
            <View style={styles.imageContainer}>
                <Image style={styles.tik} source={require('../assets/tik.png')} />
            </View>
            <View style={styles.tiktokContainer}>
                <Image style={styles.tiktok} source={require('../assets/tiktok.png')} />
            </View>
            <Text style={styles.header}>Video Scroll Demo!</Text>
            <Text style={styles.paragraph}>This is a Tiktok video scroll demo application.</Text>
            <Pressable style={styles.closeModal} onPress={props.closeModal}>
                <Text style={styles.closeModalText}>Preview!</Text>
            </Pressable>
        </SafeAreaView>
    </Modal>
  )
}

export default IntroModal

const styles = StyleSheet.create({
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
    fontSize: 18,
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
})