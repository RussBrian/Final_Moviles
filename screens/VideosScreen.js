import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { WebView } from 'react-native-webview';

const VideosScreen = () => {
    const videos = [
        { id: '1', videoId: 'bnOD-oNkO48' },
        { id: '2', videoId: 'bnOD-oNkO48' },
        { id: '3', videoId: 'bnOD-oNkO48' },
        { id: '4', videoId: 'bnOD-oNkO48' },
        { id: '5', videoId: 'bnOD-oNkO48' }
    ];

    return (
        <View style={styles.container}>
           <ScrollView style={styles.scrollView}>
           {videos.map(video => (
                <View key={video.id} style={styles.youtube}>
                    <YouTubeVideo videoId={video.videoId} />
                </View>
            ))}
           </ScrollView> 
        </View>
    );
}

const YouTubeVideo = ({ videoId }) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <WebView
            allowsFullscreenVideo
            allowsInlineMediaPlayback
            source={{ uri: videoUrl }}
            style={{ width: '100%', height: 200 }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '10%',
        marginLeft:'5%'        
       
    },
    youtube: {
        width: '90%',
        height: 200,
        marginBottom: 20
    },
    scrollView: {
      flex: 1,
      width: "100%"
    }
});

export default VideosScreen;
