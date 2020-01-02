define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/myapp/common/slidding_cards_view', 'packages/myapp/shimmer/article_list', 'packages/myapp/pages/page_two'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__myapp__common__slidding_cards_view, packages__myapp__shimmer__article_list, packages__myapp__pages__page_two) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const slidding_cards_view = packages__myapp__common__slidding_cards_view.common__slidding_cards_view;
  const article_list = packages__myapp__shimmer__article_list.shimmer__article_list;
  const page_two = packages__myapp__pages__page_two.pages__page_two;
  const page_one = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 12,
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
        [_Location_column]: 16,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C9() {
      return C9 = dart.constList([], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 29,
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
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 31,
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
        [_Location_column]: 22,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/myapp/pages/page_one.dart"
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
  let C6;
  let C7;
  let C4;
  let C3;
  let C9;
  let C8;
  let C12;
  let C13;
  let C11;
  let C10;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C14;
  let C15;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C38;
  let C37;
  page_one.PageOne = class PageOne extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Page One", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), elevation: 0.0, centerTitle: true, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new container.Container.new({width: 1 / 0, child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 32.0}), child: new slidding_cards_view.SlidingCardsView.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new basic.Padding.new({padding: C14 || CT.C14, child: new article_list.ShimerArticleList.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 8.0}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new flat_button.FlatButton.new({child: new text.Text.new("Go to page two", {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), onPressed: dart.fn(() => {
                  navigator.Navigator.push(core.Null, context, new page_two.PageTwo.new());
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26})]), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
  };
  (page_one.PageOne.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    page_one.PageOne.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_one.PageOne.prototype;
  dart.addTypeTests(page_one.PageOne);
  dart.setMethodSignature(page_one.PageOne, () => ({
    __proto__: dart.getMethods(page_one.PageOne.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(page_one.PageOne, "package:myapp/pages/page_one.dart");
  dart.trackLibraries("packages/myapp/pages/page_one", {
    "package:myapp/pages/page_one.dart": page_one
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["page_one.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,oCACG,+BACC,kBAAK,+EACD,kBACE,mEAET,kDAEG,wCACa,sBAChB,gCACsB,sCAAU,eACvB,8JAET,sDAGS,0JAET,gCAA4B,gDAAoB,gEAChD,uCACS,kBAAK,uFACD;AACyB,kBAAxB,oCAAK,OAAO,EAAE;;IAOtC;;;;;;EACF","file":"page_one.ddc.js"}');
  // Exports:
  return {
    pages__page_one: page_one
  };
});

//# sourceMappingURL=page_one.ddc.js.map
