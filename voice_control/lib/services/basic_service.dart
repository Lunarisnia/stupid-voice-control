import 'package:dio/dio.dart';

class BasicService {
  String api = "http://192.168.43.139:8888";
  sendCommand(String command) async {
    try {
      Response resp = await Dio().post(api, data: {"command": command});

      return resp.data;
    } catch (e) {
      print(e);
    }
  }
}
