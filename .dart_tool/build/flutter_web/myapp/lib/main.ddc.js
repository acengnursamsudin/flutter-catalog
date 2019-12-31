define(['dart_sdk', 'packages/flutter/material', 'packages/myapp/app_theme', 'packages/myapp/navigation/bottombar', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__myapp__app_theme, packages__myapp__navigation__bottombar, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const popup_menu = packages__flutter__material.src__material__popup_menu;
  const theme = packages__flutter__material.src__material__theme;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const app_theme = packages__myapp__app_theme.app_theme;
  const bottombar = packages__myapp__navigation__bottombar.navigation__bottombar;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const main = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfPopupMenuItem = () => (JSArrayOfPopupMenuItem = dart.constFn(_interceptors.JSArray$(popup_menu.PopupMenuItem)))();
  let ListOfPopupMenuItem = () => (ListOfPopupMenuItem = dart.constFn(core.List$(popup_menu.PopupMenuItem)))();
  let BuildContextToListOfPopupMenuItem = () => (BuildContextToListOfPopupMenuItem = dart.constFn(dart.fnType(ListOfPopupMenuItem(), [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 5,
        [_Location_file]: "org-dartlang-app:///packages/myapp/main.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C5;
  let C6;
  let C3;
  let C2;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Flutter Demo", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue, textTheme: app_theme.AppTheme.textTheme, primaryColor: colors.Colors.white}), home: new bottombar.Bottombar.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:myapp/main.dart");
  const title$ = dart.privateName(main, "MyHomePage.title");
  main.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(main._MyHomePageState, [])
  }));
  dart.setLibraryUri(main.MyHomePage, "package:myapp/main.dart");
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  const _counter = dart.privateName(main, "_counter");
  const _incrementCounter = dart.privateName(main, "_incrementCounter");
  let C9;
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C18;
  let C17;
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  let C28;
  let C27;
  let C26;
  let C31;
  let C30;
  let C29;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C52;
  let C51;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C61;
  let C58;
  let C57;
  let C64;
  let C65;
  let C66;
  let C63;
  let C62;
  main._MyHomePageState = class _MyHomePageState extends framework.State$(main.MyHomePage) {
    [_incrementCounter]() {
      this.setState(dart.fn(() => {
        this[_counter] = dart.notNull(this[_counter]) + 1;
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), leading: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.menu, {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), onPressed: dart.fn(() => {
              this[_incrementCounter]();
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), actions: JSArrayOfWidget().of([new popup_menu.PopupMenuButton.new({itemBuilder: dart.fn(context => JSArrayOfPopupMenuItem().of([new popup_menu.PopupMenuItem.new({child: new text.Text.new("Boat", {$creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new popup_menu.PopupMenuItem.new({child: new text.Text.new("Train", {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26})]), BuildContextToListOfPopupMenuItem()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new icon.Icon.new(icons.Icons.search, {$creationLocationd_0dea112b090073317d4: C32 || CT.C32})]), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("You have pushed the button this many times:", {$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new text.Text.new(dart.str(this[_counter]), {style: theme.Theme.of(context).textTheme.display1, $creationLocationd_0dea112b090073317d4: C43 || CT.C43})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.bind(this, _incrementCounter), tooltip: "Increment", child: new icon.Icon.new(icons.Icons.add, {$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
    }
  };
  (main._MyHomePageState.new = function() {
    this[_counter] = 0;
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    [_incrementCounter]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, "package:myapp/main.dart");
  dart.setFieldSignature(main._MyHomePageState, () => ({
    __proto__: dart.getFields(main._MyHomePageState.__proto__),
    [_counter]: dart.fieldType(core.int)
  }));
  let C67;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C67 || CT.C67}));
  };
  dart.trackLibraries("packages/myapp/main", {
    "package:myapp/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,iCACE,uBACA,yCACiB,+BACF,4CACC,6BAEjB;IAEV;;;;;;EACF;;;;;;;;;IAKe;;;;;;;AAGqB;IAAkB;;;QALpC;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAc/C,MAFF,cAAS;AACG,QAAV,iBAAQ,aAAR,kBAAQ;;IAEZ;UAG0B;AACxB,YAAO,oCACG,+BACC,kBAAK,AAAO,oFACV,sCACD,kBAAW,uFACN;AACU,cAAnB;gGAGa,sBACf,iDACe,QAAc,WAClB,6BACL,yCACS,kBAAK,2HAEd,yCACS,kBAAK,6NAKpB,kBAAW,+IAGT,6BACG,yCACgC,yCACnB,sBAChB,kBACE,yGAEF,kBACa,SAAT,yBACW,AAAY,AAAU,eAAnB,OAAO,yNAKT,0EACT,mCACF,oBACF,kBAAW;IAGxB;;;IAvDI,iBAAW;;;EAwDjB;;;;;;;;;;;;;;AAnFe,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
