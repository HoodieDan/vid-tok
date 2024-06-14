import { Button, StyleSheet, Text, View } from 'react-native';
// import FeedScreen from './(tabs)/Feed';
import { useState } from 'react';
import IntroModal from './IntroModal';
import { Link } from 'expo-router';

export default function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(true)
  const toggleModal = () => {
    setModalIsVisible(!modalIsVisible)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Brief Description</Text>
        <Text style={styles.paragraph}>
            As requested, the application contains a scrolling video implementation
            and tabs with empty pages.
        </Text>
        <Link style={styles.link} href="/(tabs)/Feed">Go to Feed</Link>
        {modalIsVisible && (
            <IntroModal modalIsVisible={modalIsVisible} closeModal={toggleModal} />
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
  header: {
    fontSize: 36,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  paragraph: {
    fontSize: 18,
  },
  link: {
    marginTop: 20,
    backgroundColor: '#000',
    color: '#FFF',
    fontSize: 14,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  }
});
