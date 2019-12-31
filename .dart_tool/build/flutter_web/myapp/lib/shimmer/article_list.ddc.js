define(['dart_sdk', 'packages/shimmer/shimmer', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__shimmer__shimmer, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shimmer = packages__shimmer__shimmer.shimmer;
  const colors = packages__flutter__material.src__material__colors;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const article_list = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let intToPadding = () => (intToPadding = dart.constFn(dart.fnType(basic.Padding, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 70,
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
        [_Location_column]: 27,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "baseColor",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/article_list.dart"
      });
    }
  });
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C7;
  let C8;
  let C9;
  let C5;
  let C4;
  let C10;
  let C13;
  let C12;
  let C11;
  let C14;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C25;
  let C26;
  let C22;
  let C21;
  let C27;
  let C30;
  let C29;
  let C28;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C38;
  let C39;
  let C35;
  let C34;
  let C42;
  let C41;
  let C40;
  let C45;
  let C44;
  let C43;
  let C48;
  let C49;
  let C50;
  let C51;
  let C47;
  let C46;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C57;
  let C56;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C68;
  let C67;
  let C72;
  let C73;
  let C74;
  let C75;
  let C71;
  let C70;
  article_list.ShimerArticleList = class ShimerArticleList extends framework.StatelessWidget {
    build(context) {
      return new shimmer.Shimmer.fromColors({baseColor: colors.Colors.grey._get(300), highlightColor: colors.Colors.grey._get(100), enabled: true, child: new basic.Column.new({children: JSArrayOfint().of([0, 1, 2])[$map](basic.Padding, dart.fn(_ => new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({width: 48.0, height: 48.0, color: colors.Colors.transparent, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20.0))}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new basic.Padding.new({padding: C10 || CT.C10, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C14 || CT.C14, $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new container.Container.new({width: 160.0, height: 8.0, color: colors.Colors.transparent, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(4.0))}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new basic.Padding.new({padding: C27 || CT.C27, $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new container.Container.new({width: 1 / 0, height: 8.0, color: colors.Colors.transparent, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(4.0))}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.Padding.new({padding: C27 || CT.C27, $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new container.Container.new({width: 1 / 0, height: 8.0, color: colors.Colors.transparent, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(4.0))}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46})]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56})]), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), intToPadding()))[$toList](), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
    }
  };
  (article_list.ShimerArticleList.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    article_list.ShimerArticleList.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = article_list.ShimerArticleList.prototype;
  dart.addTypeTests(article_list.ShimerArticleList);
  dart.setMethodSignature(article_list.ShimerArticleList, () => ({
    __proto__: dart.getMethods(article_list.ShimerArticleList.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(article_list.ShimerArticleList, "package:myapp/shimmer/article_list.dart");
  dart.trackLibraries("packages/myapp/shimmer/article_list", {
    "package:myapp/shimmer/article_list.dart": article_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["article_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAe,4CACK,AAAI,wBAAC,sBACA,AAAI,wBAAC,eACnB,aACF,gCACK,AACL,AA6EA,mBA9EM,GAAG,GAAG,yBAEX,QAAC,KAAM,oDAEE,uCACkC,yCAC7B,sBACR,oCACS,cACC,aACM,kCACH,yCACO,6CACA,mCAEN,mCAAwB,uBAAS,wHAI/C,wGAGA,+BACS,0CACkC,yCAC7B,sBACR,wGAGA,oCACS,eACC,YACM,kCACH,yCACO,6CACA,mCAEN,mCAAwB,uBAAS,2HAI/C,wGAGA,mDAEU,YACM,kCACH,yCACO,6CACA,mCAEN,mCAAwB,uBAAS,2HAI/C,wGAGA,mDAEU,YACM,kCACH,yCACO,6CACA,mCAEN,mCAAwB,uBAAS;IAcvE;;;;;;EACF","file":"article_list.ddc.js"}');
  // Exports:
  return {
    shimmer__article_list: article_list
  };
});

//# sourceMappingURL=article_list.ddc.js.map
