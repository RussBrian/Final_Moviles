import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { WebView } from 'react-native-webview';

const VideosScreen = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch("https://adamix.net/defensa_civil/def/videos.php");
            const json = await response.json();
            if (json.exito) {
                setVideos(json.datos);
            } else {
                console.error("Error fetching videos:", json.mensaje);
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {videos.map(video => (
                    <View key={video.id} style={styles.videoContainer}>
                        <Text style={styles.videoTitle}>{video.titulo}</Text>
                        <Text style={styles.videoDescription}>{video.descripcion}</Text>
                        <YouTubeVideo videoId={video.link} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

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
        marginLeft: '5%'
    },
    videoContainer: {
        width: '90%',
        marginBottom: 20
    },
    videoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    videoDescription: {
        fontSize: 16,
        marginBottom: 10
    },
    scrollView: {
        flex: 1,
        width: "100%"
    }
});

export default VideosScreen;