define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/shimmer/shimmer'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__shimmer__shimmer) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const colors = packages__flutter__material.src__material__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const shimmer = packages__shimmer__shimmer.shimmer;
  const product_list = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToColumn = () => (VoidToColumn = dart.constFn(dart.fnType(basic.Column, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intToPadding = () => (intToPadding = dart.constFn(dart.fnType(basic.Padding, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 25,
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
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 35,
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
        [_Location_column]: 28,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 29,
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
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 0
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 4
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "baseColor",
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/myapp/shimmer/product_list.dart"
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
  let C4;
  let C5;
  let C6;
  let C2;
  let C1;
  let C9;
  let C10;
  let C8;
  let C7;
  let C11;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  let C20;
  let C21;
  let C22;
  let C23;
  let C19;
  let C18;
  let C26;
  let C25;
  let C24;
  let C29;
  let C30;
  let C31;
  let C32;
  let C28;
  let C27;
  let C35;
  let C36;
  let C34;
  let C33;
  let C37;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C48;
  let C49;
  let C45;
  let C44;
  let C52;
  let C53;
  let C51;
  let C50;
  let C54;
  let C57;
  let C56;
  let C55;
  let C58;
  let C61;
  let C60;
  let C59;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C74;
  let C73;
  let C78;
  let C79;
  let C80;
  let C77;
  let C76;
  product_list.ShimmerPoductLists = class ShimmerPoductLists extends framework.StatelessWidget {
    build(context) {
      function product() {
        return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({color: colors.Colors.transparent, child: new container.Container.new({width: 180.0, height: 180.0, padding: C0 || CT.C0, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10.0))}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Padding.new({padding: C11 || CT.C11, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new container.Container.new({width: 100.0, height: 8.0, color: colors.Colors.transparent, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(4.0))}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new container.Container.new({width: 40.0, height: 8.0, color: colors.Colors.transparent, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(4.0))}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new basic.Padding.new({padding: C37 || CT.C37, $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), new container.Container.new({width: 80.0, height: 8.0, color: colors.Colors.transparent, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(4.0))}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C50 || CT.C50});
      }
      dart.fn(product, VoidToColumn());
      return new shimmer.Shimmer.fromColors({baseColor: colors.Colors.grey._get(300), highlightColor: colors.Colors.grey._get(100), child: new basic.Column.new({children: JSArrayOfint().of([0, 1])[$map](basic.Padding, dart.fn(_ => new basic.Padding.new({padding: C54 || CT.C54, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Expanded.new({child: product(), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new basic.Padding.new({padding: C58 || CT.C58, $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new basic.Expanded.new({child: product(), $creationLocationd_0dea112b090073317d4: C62 || CT.C62})]), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), intToPadding()))[$toList](), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
    }
  };
  (product_list.ShimmerPoductLists.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    product_list.ShimmerPoductLists.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_list.ShimmerPoductLists.prototype;
  dart.addTypeTests(product_list.ShimmerPoductLists);
  dart.setMethodSignature(product_list.ShimmerPoductLists, () => ({
    __proto__: dart.getMethods(product_list.ShimmerPoductLists.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_list.ShimmerPoductLists, "package:myapp/shimmer/product_list.dart");
  dart.trackLibraries("packages/myapp/shimmer/product_list", {
    "package:myapp/shimmer/product_list.dart": product_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB;AACE,cAAO,2CACkC,yCACrB,sBAChB,oCACgB,kCACH,oCACF,eACC,yCAEQ,6CACA,mCACI,mCAAwB,uBAAS,wHAIzD,wGAGA,sCACuC,+CACnB,sBAChB,oCACS,eACC,YACM,kCACH,yCACO,6CACA,mCACI,mCAAwB,uBAAS,2HAIzD,oCACS,cACC,YACM,kCACH,yCACO,6CACA,mCACI,mCAAwB,uBAAS,sLAM7D,wGAGA,oCACS,cACC,YACM,kCACH,yCACO,6CACA,mCACI,mCAAwB,uBAAS;;;AAQ/D,YAAe,4CACK,AAAI,wBAAC,sBACA,AAAI,wBAAC,aACrB,gCACK,AACL,AAmBA,mBApBM,GAAG,yBAER,QAAC,KAAM,sDAEE,uCACkC,yCAC7B,sBACR,+BACS,AAAO,OAAA,6DAEhB,wGAGA,+BACS,AAAO,OAAA;IASlC;;;;;;EACF","file":"product_list.ddc.js"}');
  // Exports:
  return {
    shimmer__product_list: product_list
  };
});

//# sourceMappingURL=product_list.ddc.js.map
