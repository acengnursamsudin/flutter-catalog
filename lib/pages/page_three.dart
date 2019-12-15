import 'package:flutter/material.dart';
import 'package:myapp/shimmer/shimmer.dart';

class PageThree extends MaterialPageRoute<Null> {
  PageThree()
      : super(builder: (BuildContext context) {
          return Scaffold(
            appBar: AppBar(
              title: Text('Page Three'),
            ),
            body: ListView(
              padding:
                  const EdgeInsets.symmetric(horizontal: 16.0, vertical: 16.0),
              children: <Widget>[
                ShimmerProductDetails(),
                Padding(padding: EdgeInsets.symmetric(vertical: 8.0)),
                FlatButton(
                  child: Text('Back'),
                  onPressed: () {
                    Navigator.pop(context);
                  },
                )
              ],
            ),
          );
        });
}
