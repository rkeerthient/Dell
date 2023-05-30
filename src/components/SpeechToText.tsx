import { MicrophoneIcon, StopIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Spinner from "./Spinner";

const SpeechToText = ({ sendDataToParent }: any) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    transcript && sendDataToParent(transcript, isListening);
  }, [transcript, isListening]);

  useEffect(() => {
    let recognitionTimer: NodeJS.Timeout;

    const startRecognition = () => {
      setIsListening(true);
      setIsProcessing(true);
      SpeechRecognition.startListening();
      recognitionTimer = setTimeout(() => {
        stopRecognition();
      }, 5000); // Stop listening after 5 seconds of inactivity
    };

    const stopRecognition = () => {
      SpeechRecognition.stopListening();
      setIsListening(false);
      setIsProcessing(false);
      clearTimeout(recognitionTimer);
    };

    if (isListening) {
      startRecognition();
    }

    return () => {
      stopRecognition();
    };
  }, [isListening]);

  const handleStart = () => {
    resetTranscript();
    setIsProcessing(true); // Start showing the loading spinner
    setTimeout(() => {
      setIsProcessing(false); // Stop showing the loading spinner after a brief delay
      setIsListening(true); // Start speech recognition
    }, 500); // Adjust the delay as needed
  };

  const handleStop = () => {
    setIsListening(false);
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition is not supported in your browser.</div>;
  }

  return (
    <div>
      <div>
        {isListening ? (
          <>
            <button onClick={handleStop} disabled={!isListening}>
              <StopIcon className="h-5 w-5" />
            </button>

            {isProcessing ? (
              <div>
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-900 mx-2" />
              </div>
            ) : null}
          </>
        ) : (
          <button onClick={handleStart} disabled={isListening}>
            <MicrophoneIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SpeechToText;
