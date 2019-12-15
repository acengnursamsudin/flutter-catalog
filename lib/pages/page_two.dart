import 'package:flutter/material.dart';
import 'package:myapp/pages/page_three.dart';
import 'package:myapp/shimmer/shimmer.dart';

class PageTwo extends MaterialPageRoute<Null> {
  PageTwo()
      : super(builder: (BuildContext context) {
          return Scaffold(
            appBar: AppBar(
              title: Text('Page Two'),
            ),
            body: ListView(
              padding: const EdgeInsets.all(16.0),
              children: <Widget>[
                ShimmerPoductLists(),
                Padding(padding: EdgeInsets.symmetric(vertical: 8.0)),
                FlatButton(
                  child: Text('Go to Page 3'),
                  onPressed: () {
                    Navigator.push(context, PageThree());
                  },
                )
              ],
            ),
          );
        });
}
