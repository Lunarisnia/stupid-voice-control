import 'package:flutter/material.dart';
import 'package:speech_to_text/speech_recognition_result.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;
import 'package:voice_control/services/basic_service.dart';

class HomePage extends StatefulWidget {
  static const tag = "/home-page";

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String counter;
  bool voiceRegAvailable;
  stt.SpeechToText speech = stt.SpeechToText();

  initVoiceReg() async {
    voiceRegAvailable = await speech.initialize(
        debugLogging: true,
        onStatus: (_) {},
        onError: (_) {
          print(_.errorMsg);
        });
  }

  onResult(SpeechRecognitionResult result) {
    String word;
    setState(() {
      if (result.finalResult) {
        word = result.recognizedWords;
        counter = word;
        BasicService().sendCommand(word);
      }
    });
  }

  @override
  void initState() {
    super.initState();
    initVoiceReg();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Stupid controller"),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          if (voiceRegAvailable) {
            if (speech.isListening) {
              speech.stop();
            }
            speech.listen(
              onResult: onResult,
              listenFor: Duration(seconds: 10),
            );
            setState(() {
              counter = "Listening..";
            });
          } else {
            print("The user has denied the use of speech recognition.");
          }
          // speech.stop();
        },
      ),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Center(
              child: Text(counter.toString()),
            ),
          ],
        ),
      ),
    );
  }
}
