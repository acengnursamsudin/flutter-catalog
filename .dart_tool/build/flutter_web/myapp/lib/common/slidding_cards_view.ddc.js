define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const page_view = packages__flutter__src__widgets__actions.src__widgets__page_view;
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
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "date",
        [_Location_column]: 13,
        [_Location_line]: 36,
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
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "assetName",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "date",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 32,
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
        [_Location_column]: 14,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 30,
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
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 41,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 77,
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
        [_Location_column]: 11,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C30() {
      return C30 = dart.constList([], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 80,
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
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/myapp/common/slidding_cards_view.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 63,
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
  let C9;
  let C6;
  let C5;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  slidding_cards_view._SlidingCardsViewState = class _SlidingCardsViewState extends framework.State$(slidding_cards_view.SlidingCardsView) {
    initState() {
      super.initState();
      this.pageController = new page_view.PageController.new({viewportFraction: 0.8});
    }
    dispose() {
      this.pageController.dispose();
      super.dispose();
    }
    build(context) {
      return new basic.SizedBox.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.55, child: new page_view.PageView.new({controller: this.pageController, children: JSArrayOfWidget().of([new slidding_cards_view.SlidingCard.new({assetName: "tshirt.jpeg", name: "Name Card", date: "4.20-30", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new slidding_cards_view.SlidingCard.new({assetName: "tshirt.jpeg", name: "Name Card", date: "4.20-30", $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
  };
  (slidding_cards_view._SlidingCardsViewState.new = function() {
    this.pageController = null;
    slidding_cards_view._SlidingCardsViewState.__proto__.new.call(this);
    ;
  }).prototype = slidding_cards_view._SlidingCardsViewState.prototype;
  dart.addTypeTests(slidding_cards_view._SlidingCardsViewState);
  dart.setMethodSignature(slidding_cards_view._SlidingCardsViewState, () => ({
    __proto__: dart.getMethods(slidding_cards_view._SlidingCardsViewState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(slidding_cards_view._SlidingCardsViewState, "package:myapp/common/slidding_cards_view.dart");
  dart.setFieldSignature(slidding_cards_view._SlidingCardsViewState, () => ({
    __proto__: dart.getFields(slidding_cards_view._SlidingCardsViewState.__proto__),
    pageController: dart.fieldType(page_view.PageController)
  }));
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C27;
  let C26;
  let C30;
  let C29;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C41;
  let C42;
  let C38;
  let C37;
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
      return new card.Card.new({margin: new edge_insets.EdgeInsets.only({left: 8.0, right: 8.0, bottom: 24.0, top: 2.0}), elevation: 4.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(32.0)}), child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.vertical({top: new ui.Radius.circular(32.0)}), child: new image.Image.asset("assets/images/" + dart.str(this.assetName), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new basic.Expanded.new({child: new container.Container.new({$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
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
  }, '{"version":3,"sourceRoot":"","sources":["slidding_cards_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOqB,MAAX;AACgD,MAAtD,sBAAiB,oDAAiC;IACpD;;AAI0B,MAAxB,AAAe;AACA,MAAT;IACR;UAG0B;AACxB,YAAO,iCACsC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACtC,wCACO,+BACM,sBAChB,oDACa,qBACL,mBACA,kEAER,oDACa,qBACL,mBACA;IAKhB;;;IAlCe;;;EAmCjB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;UAUa;AACxB,YAAO,4BACc,uCAAW,YAAY,aAAa,WAAW,kBACvD,YACJ,uEAAkD,wCAAS,gBAC3D,gCACa,sBAChB,uCAC6B,8CAAqB,uBAAS,gBAC5C,sBACX,AAA0B,4BAAV,uBACJ,wIAGhB,gCACU,8DAEV,+BACS;IAKjB;;;QA9BS;QACU;QACA;QACA;;IAFA;IACA;IACA;AACb,mEAAW,GAAG;;EAAC","file":"slidding_cards_view.ddc.js"}');
  // Exports:
  return {
    common__slidding_cards_view: slidding_cards_view
  };
});

//# sourceMappingURL=slidding_cards_view.ddc.js.map
