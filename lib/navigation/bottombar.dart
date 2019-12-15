import 'package:flutter/material.dart';
import 'package:myapp/pages/page_one.dart';

class Bottombar extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _BottombarState();
  }
}

class _BottombarState extends State<Bottombar> {
  int _currentTabIndex = 0;

  @override
  Widget build(BuildContext context) {
    final _kTabPages = <Widget>[
      PageOne(),
      Center(
        child: Icon(Icons.alarm),
      ),
      Center(
        child: Icon(Icons.forum),
      )
    ];

    final _kTab = <BottomNavigationBarItem>[
      BottomNavigationBarItem(
        icon: Icon(Icons.cloud),
        title: Text('Cloud'),
      ),
      BottomNavigationBarItem(
        icon: Icon(Icons.alarm),
        title: Text('Alarm'),
      ),
      BottomNavigationBarItem(
        icon: Icon(Icons.forum),
        title: Text('Forum'),
      )
    ];

    assert(_kTabPages.length == _kTab.length);
    final bottomNavBar = BottomNavigationBar(
      items: _kTab,
      currentIndex: _currentTabIndex,
      type: BottomNavigationBarType.fixed,
      onTap: (int index) {
        setState(() {
          _currentTabIndex = index;
        });
      },
    );
    return Scaffold(
        body: _kTabPages[_currentTabIndex], bottomNavigationBar: bottomNavBar);
  }
}
