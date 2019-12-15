import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:myapp/pages/page_two.dart';
import 'package:myapp/shimmer/shimmer.dart';

class PageOne extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Page One'),
        elevation: 0.0,
        centerTitle: true,
        backgroundColor: Color(000),
        textTheme: TextTheme(
            title: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold)),
      ),
      body: Container(
        width: double.infinity,
        child: ListView(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 16.0),
          children: <Widget>[
            ShimerArticleList(),
            Padding(padding: EdgeInsets.symmetric(vertical: 8.0)),
            FlatButton(
              child: Text('Go to page two'),
              onPressed: () {
                Navigator.push(context, PageTwo());
              },
            ),
          ],
        ),
      ),
    );
  }
}
