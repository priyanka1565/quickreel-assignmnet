import React, { useState, useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import ReactPlayer from 'react-player';
import { Box, Button, Input } from '@chakra-ui/react';
import FaceCanvas from './FaceCanvas';

import 'fabric/dist/fabric';

const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [playing, setPlaying] = useState(false);
    const videoElement = useRef(null);

    useEffect(() => {
        
    }, []);

    const handleVideoChange = (e) => {
        setVideoUrl(URL.createObjectURL(e.target.files[0]));
    };

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        <Box className="video-player" textAlign="center">
            <ReactPlayer
                ref={videoElement}
                url={videoUrl}
                playing={playing}
                controls={false}
                width="100%"
                height="100%"
            />
            <FaceCanvas videoElement={videoElement} playing={playing} />
            <Box
                className="controls"
                position="absolute"
                bottom="20px"
                left="50%"
                transform="translateX(-50%)"
                display="flex"
                alignItems="center"
                gap="10px"
            >
                <Input type="file" accept="video/*" onChange={handleVideoChange} />
                <Button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</Button>
            </Box>
        </Box>
    );
};

export default VideoPlayer;
