import { Video, ResizeMode } from 'expo-av';
import { View, Dimensions, StyleSheet, Pressable, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from 'expo-router';

export default function VideoItem ({ item, shouldPlay }) {
    const video = React.useRef('');
    const [status, setStatus] = useState(null);

    // useFocusEffect(
    //     useCallback(() => {
    //         return () => {
    //             video.current.pauseAsync();
    //         }
    //     }, [video.current])
    // )

    useEffect(() => {
        if (!video.current) return;

        if (shouldPlay) {
            video.current.playAsync()
        } else {
            video.current.pauseAsync()
            video.current.setPositionAsync(0)
        }

        // if (pause) {
        //     video.current.pauseAsync();
        // }
    }, [shouldPlay])

    return (
        <Pressable style={styles.container} onPress={() => status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()}>
            <View style={styles.videoContainer}>
                <Video 
                    ref={video}
                    source={{ uri: item }}
                    style={styles.video}
                    isLooping={true}
                    resizeMode={ResizeMode.COVER}
                    useNativeControls={false}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                {/* {
                    !status.isPlaying && (
                        <Image source={require('../assets/play.png')} />
                    )
                } */}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 75,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    playButton: {
        zindex: 10,
    }
});