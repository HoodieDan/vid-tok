import { View, FlatList, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import VideoItem from '../components/VideoItem';
import { videos } from '../data/videos';

export default function FeedScreen(props) {
  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 }
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  }
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])
  return (
    <View style={styles.container}>
      <FlatList
            data={videos}
            renderItem={({ item, index }) => (
                <VideoItem item={item} shouldPlay={index === currentViewableItemIndex} />
            )}
            keyExtractor={item => item}
            pagingEnabled
            horizontal={false}
            showsVerticalScrollIndicator={false}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});