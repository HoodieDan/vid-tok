import { Video, ResizeMode } from 'expo-av';
import { View, Dimensions, StyleSheet, Pressable, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'expo-router';

export default function VideoItem ({ item, shouldPlay }) {
    const video = React.useRef();
    const [status, setStatus] = useState(null);
    const [ paused, setPaused ] = useState(false);
    const [ isBuffering, setIsBuffering ] = useState(false);
    const pathName = usePathname();

    // this is to track the route so as to pause the video when user switches to another screen 
    useEffect(() => {
        if (pathName !== '/Feed') {
            video.current.pauseAsync()
            setPaused(true);
        } else if (pathName === '/Feed' && shouldPlay) {
            video.current.playAsync()
            setPaused(false);
        }
    }, [pathName, shouldPlay])

    useEffect(() => {
        if (!video.current) return;

        if (shouldPlay) {
            video.current.playAsync()
        } else {
            video.current.pauseAsync()
            video.current.setPositionAsync(0)
        }
    }, [shouldPlay])

    // set isBuffering status if video is buffering 
    useEffect(() => {
        if (status) {
            setIsBuffering(status.isBuffering);
        }
    }, [status?.isBuffering])

    // pause video on press if video is playing 
    const handlePause = () => {
        status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
        status.isPlaying ? setPaused(!paused): setPaused(false);
    }

    return (
        <Pressable style={styles.container} onPress={ handlePause }>
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

                {/* show play button if video is paused */}
                {
                    paused && (
                        <View style={styles.playButton}>
                            <Image style={styles.play} source={require('../assets/images/play.png')} />
                        </View>
                    )
                }
                
                {/* activity indicator to handle if video is buffering  */}
                {
                    isBuffering && (
                        <ActivityIndicator style={styles.playButton} />
                    )
                }
            </View>
        </Pressable>
    );
}

// const windowHeight = Platform.OS === 'android' && Platform.Version  <= 10   ? 
//     Dimensions.get('window').height - StatusBar.currentHeight - 75
//   : Dimensions.get('window').height - 75; 

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
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    play: {
        height: 80,
        width: 80,
    }
});