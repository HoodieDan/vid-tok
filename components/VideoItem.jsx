import { Video, ResizeMode } from 'expo-av';
import { View, Dimensions, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function VideoItem ({ item, shouldPlay }) {
    const video = React.useRef();
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (!video.current) return;

        if (shouldPlay) {
            video.current.playAsync()
        } else {
            video.current.pauseAsync()
            video.current.setPositionAsync(0)
        }
    }, [shouldPlay])

    return (
        <Pressable onPress={() => status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()}>
            <View style={styles.videoContainer}>
                <Video 
                    ref={video}
                    source={{ uri: item }}
                    style={styles.video}
                    isLooping
                    resizeMode={ResizeMode.COVER}
                    useNativeControls={false}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    videoContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 34,
    },
    video: {
        width: '100%',
        height: '100%',
    },
});