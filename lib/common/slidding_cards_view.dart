import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SlidingCardsView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _SlidingCardsViewState();
  }
}

class _SlidingCardsViewState extends State<SlidingCardsView> {
  PageController pageController;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.55,
      child: PageView(
        children: <Widget>[
          SlidingCard(
            assetName: 'sample.jgp',
            name: 'Name Card',
            date: '4.20-30',
          ),
          SlidingCard(
            assetName: 'sample.jgp',
            name: 'Name Card',
            date: '4.20-30',
          )
        ],
      ),
    );
  }
}

class SlidingCard extends StatelessWidget {
  final String name;
  final String date;
  final String assetName;

  const SlidingCard(
      {Key key,
      @required this.name,
      @required this.date,
      @required this.assetName})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.only(left: 8.0, right: 8.0, bottom: 24.0),
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(32)),
      child: Column(
        children: <Widget>[
          ClipRRect(
            borderRadius: BorderRadius.vertical(top: Radius.circular(32)),
            child: Image.asset(
              'assets/images/$assetName',
              height: MediaQuery.of(context).size.height * 0.3,
              fit: BoxFit.none,
            ),
          ),
          SizedBox(
            height: 8.0,
          ),
          Expanded(
            child: Container(),
          )
        ],
      ),
    );
  }
}
