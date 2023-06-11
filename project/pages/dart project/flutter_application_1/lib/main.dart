import 'dart:js';

import 'package:flutter/material.dart';
import 'package:flutter_application_1/login.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      initialRoute: 'login',
      routes: {
        'login': (context)=>MyLogin()
      },


  ));
}

