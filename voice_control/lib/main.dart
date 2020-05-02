import 'package:flutter/material.dart';
import 'package:voice_control/views/home.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Voice Controller",
      initialRoute: HomePage.tag,
      routes: {
        HomePage.tag: (_) => HomePage(),
      },
    );
  }
}
