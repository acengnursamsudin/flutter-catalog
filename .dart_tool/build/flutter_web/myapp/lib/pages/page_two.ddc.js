define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/myapp/shimmer/product_list', 'packages/myapp/pages/page_three'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__myapp__shimmer__product_list, packages__myapp__pages__page_three) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const page = packages__flutter__material.src__material__page;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const product_list = packages__myapp__shimmer__product_list.shimmer__product_list;
  const page_three = packages__myapp__pages__page_three.pages__page_three;
  const page_two = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToScaffold = () => (BuildContextToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 13,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 13,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_two.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C6;
  let C8;
  let C7;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  page_two.PageTwo = class PageTwo extends page.MaterialPageRoute$(core.Null) {};
  (page_two.PageTwo.new = function() {
    page_two.PageTwo.__proto__.new.call(this, {builder: dart.fn(context => new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Page Two", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new scroll_view.ListView.new({padding: C6 || CT.C6, children: JSArrayOfWidget().of([new product_list.ShimmerPoductLists.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 8.0}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new flat_button.FlatButton.new({child: new text.Text.new("Go to Page 3", {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), onPressed: dart.fn(() => {
                navigator.Navigator.push(core.Null, context, new page_three.PageThree.new());
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), BuildContextToScaffold())});
    ;
  }).prototype = page_two.PageTwo.prototype;
  dart.addTypeTests(page_two.PageTwo);
  dart.setLibraryUri(page_two.PageTwo, "package:myapp/pages/page_two.dart");
  dart.trackLibraries("packages/myapp/pages/page_two", {
    "package:myapp/pages/page_two.dart": page_two
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["page_two.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMQ,wDAAe,QAAc,WACpB,mCACG,+BACC,kBAAK,iIAER,8DAEc,sBAChB,gGACA,gCAA4B,gDAAoB,8DAChD,uCACS,kBAAK,qFACD;AAC2B,gBAA1B,oCAAK,OAAO,EAAE;;;EAMlC","file":"page_two.ddc.js"}');
  // Exports:
  return {
    pages__page_two: page_two
  };
});

//# sourceMappingURL=page_two.ddc.js.map
