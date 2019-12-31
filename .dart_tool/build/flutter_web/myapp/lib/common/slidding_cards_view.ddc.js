define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const card = packages__flutter__material.src__material__card;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const slidding_cards_view = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "assetName",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "date",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 41,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 54,
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
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C22() {
      return C22 = dart.constList([], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 57,
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
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 44,
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
        [_Location_column]: 14,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    }
  });
  slidding_cards_view.SlidingCardsView = class SlidingCardsView extends framework.StatefulWidget {
    createState() {
      return new slidding_cards_view._SlidingCardsViewState.new();
    }
  };
  (slidding_cards_view.SlidingCardsView.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    slidding_cards_view.SlidingCardsView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = slidding_cards_view.SlidingCardsView.prototype;
  dart.addTypeTests(slidding_cards_view.SlidingCardsView);
  dart.setMethodSignature(slidding_cards_view.SlidingCardsView, () => ({
    __proto__: dart.getMethods(slidding_cards_view.SlidingCardsView.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(slidding_cards_view.SlidingCardsView, "package:myapp/common/slidding_cards_view.dart");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
  slidding_cards_view._SlidingCardsViewState = class _SlidingCardsViewState extends framework.State$(slidding_cards_view.SlidingCardsView) {
    build(context) {
      return new basic.SizedBox.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.55, child: new slidding_cards_view.SlidingCard.new({assetName: "sample.jgp", name: "Name Card", date: "4.20-30", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (slidding_cards_view._SlidingCardsViewState.new = function() {
    slidding_cards_view._SlidingCardsViewState.__proto__.new.call(this);
    ;
  }).prototype = slidding_cards_view._SlidingCardsViewState.prototype;
  dart.addTypeTests(slidding_cards_view._SlidingCardsViewState);
  dart.setMethodSignature(slidding_cards_view._SlidingCardsViewState, () => ({
    __proto__: dart.getMethods(slidding_cards_view._SlidingCardsViewState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(slidding_cards_view._SlidingCardsViewState, "package:myapp/common/slidding_cards_view.dart");
  let C11;
  let C12;
  let C13;
  let C10;
  let C9;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C19;
  let C18;
  let C22;
  let C21;
  let C25;
  let C24;
  let C23;
  let C28;
  let C27;
  let C26;
  let C31;
  let C32;
  let C33;
  let C34;
  let C30;
  let C29;
  const name$ = dart.privateName(slidding_cards_view, "SlidingCard.name");
  const date$ = dart.privateName(slidding_cards_view, "SlidingCard.date");
  const assetName$ = dart.privateName(slidding_cards_view, "SlidingCard.assetName");
  slidding_cards_view.SlidingCard = class SlidingCard extends framework.StatelessWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get date() {
      return this[date$];
    }
    set date(value) {
      super.date = value;
    }
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    build(context) {
      return new card.Card.new({margin: new edge_insets.EdgeInsets.only({left: 8.0, right: 8.0, bottom: 24.0}), elevation: 4.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(32.0)}), child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.vertical({top: new ui.Radius.circular(32.0)}), child: new image.Image.asset("assets/images/" + dart.str(this.assetName), {height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.3, fit: box_fit.BoxFit.none, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new basic.Expanded.new({child: new container.Container.new({$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23})]), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (slidding_cards_view.SlidingCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let date = opts && 'date' in opts ? opts.date : null;
    let assetName = opts && 'assetName' in opts ? opts.assetName : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[date$] = date;
    this[assetName$] = assetName;
    slidding_cards_view.SlidingCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = slidding_cards_view.SlidingCard.prototype;
  dart.addTypeTests(slidding_cards_view.SlidingCard);
  dart.setMethodSignature(slidding_cards_view.SlidingCard, () => ({
    __proto__: dart.getMethods(slidding_cards_view.SlidingCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(slidding_cards_view.SlidingCard, "package:myapp/common/slidding_cards_view.dart");
  dart.setFieldSignature(slidding_cards_view.SlidingCard, () => ({
    __proto__: dart.getFields(slidding_cards_view.SlidingCard.__proto__),
    name: dart.finalFieldType(core.String),
    date: dart.finalFieldType(core.String),
    assetName: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/myapp/common/slidding_cards_view", {
    "package:myapp/common/slidding_cards_view.dart": slidding_cards_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["slidding_cards_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,iCACsC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACtC,oDACM,oBACL,mBACA;IAGZ;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;UAUa;AACxB,YAAO,4BACc,uCAAW,YAAY,aAAa,mBAC5C,YACJ,uEAAkD,wCAAS,gBAC3D,gCACa,sBAChB,uCAC6B,8CAAqB,uBAAS,gBAC5C,sBACX,AAA0B,4BAAV,0BAC2B,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,UACjC,qIAGhB,gCACU,8DAEV,+BACS;IAKjB;;;QA/BS;QACU;QACA;QACA;;IAFA;IACA;IACA;AACb,mEAAW,GAAG;;EAAC","file":"slidding_cards_view.ddc.js"}');
  // Exports:
  return {
    common__slidding_cards_view: slidding_cards_view
  };
});

//# sourceMappingURL=slidding_cards_view.ddc.js.map
