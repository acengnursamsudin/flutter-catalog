define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const shimmer$ = Object.create(dart.library);
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let DiagnosticsPropertyOfGradient = () => (DiagnosticsPropertyOfGradient = dart.constFn(diagnostics.DiagnosticsProperty$(gradient.Gradient)))();
  let EnumPropertyOfShimmerDirection = () => (EnumPropertyOfShimmerDirection = dart.constFn(diagnostics.EnumProperty$(shimmer$.ShimmerDirection)))();
  let DiagnosticsPropertyOfDuration = () => (DiagnosticsPropertyOfDuration = dart.constFn(diagnostics.DiagnosticsProperty$(core.Duration)))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation.AnimationStatus])))();
  let BuildContextAndWidgetTo_Shimmer = () => (BuildContextAndWidgetTo_Shimmer = dart.constFn(dart.fnType(shimmer$._Shimmer, [framework.BuildContext, framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: shimmer$.ShimmerDirection.prototype,
        [_name$]: "ShimmerDirection.ltr",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: shimmer$.ShimmerDirection.prototype,
        [_name$]: "ShimmerDirection.rtl",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: shimmer$.ShimmerDirection.prototype,
        [_name$]: "ShimmerDirection.ttb",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: shimmer$.ShimmerDirection.prototype,
        [_name$]: "ShimmerDirection.btt",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], shimmer$.ShimmerDirection);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1500000
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 9,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gradient",
        [_Location_column]: 9,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "percent",
        [_Location_column]: 9,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 9,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/shimmer/shimmer.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/shimmer/shimmer.dart"
      });
    }
  });
  const _name$ = dart.privateName(shimmer$, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  shimmer$.ShimmerDirection = class ShimmerDirection extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (shimmer$.ShimmerDirection.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = shimmer$.ShimmerDirection.prototype;
  dart.addTypeTests(shimmer$.ShimmerDirection);
  dart.setLibraryUri(shimmer$.ShimmerDirection, "package:shimmer/shimmer.dart");
  dart.setFieldSignature(shimmer$.ShimmerDirection, () => ({
    __proto__: dart.getFields(shimmer$.ShimmerDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(shimmer$.ShimmerDirection, ['toString']);
  shimmer$.ShimmerDirection.ltr = C0 || CT.C0;
  shimmer$.ShimmerDirection.rtl = C1 || CT.C1;
  shimmer$.ShimmerDirection.ttb = C2 || CT.C2;
  shimmer$.ShimmerDirection.btt = C3 || CT.C3;
  shimmer$.ShimmerDirection.values = C4 || CT.C4;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C5;
  const child$ = dart.privateName(shimmer$, "Shimmer.child");
  const period$ = dart.privateName(shimmer$, "Shimmer.period");
  const direction$ = dart.privateName(shimmer$, "Shimmer.direction");
  const gradient$ = dart.privateName(shimmer$, "Shimmer.gradient");
  const loop$ = dart.privateName(shimmer$, "Shimmer.loop");
  const enabled$ = dart.privateName(shimmer$, "Shimmer.enabled");
  shimmer$.Shimmer = class Shimmer extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get period() {
      return this[period$];
    }
    set period(value) {
      super.period = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get loop() {
      return this[loop$];
    }
    set loop(value) {
      super.loop = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    createState() {
      return new shimmer$._ShimmerState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfGradient()).new("gradient", this.gradient, {defaultValue: null}));
      properties.add(new (EnumPropertyOfShimmerDirection()).new("direction", this.direction));
      properties.add(new (DiagnosticsPropertyOfDuration()).new("period", this.period, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("enabled", this.enabled, {defaultValue: null}));
    }
  };
  (shimmer$.Shimmer.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let direction = opts && 'direction' in opts ? opts.direction : C0 || CT.C0;
    let period = opts && 'period' in opts ? opts.period : C5 || CT.C5;
    let loop = opts && 'loop' in opts ? opts.loop : 0;
    let enabled = opts && 'enabled' in opts ? opts.enabled : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[gradient$] = gradient;
    this[direction$] = direction;
    this[period$] = period;
    this[loop$] = loop;
    this[enabled$] = enabled;
    shimmer$.Shimmer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shimmer$.Shimmer.prototype;
  (shimmer$.Shimmer.fromColors = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let baseColor = opts && 'baseColor' in opts ? opts.baseColor : null;
    let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : null;
    let period = opts && 'period' in opts ? opts.period : C5 || CT.C5;
    let direction = opts && 'direction' in opts ? opts.direction : C0 || CT.C0;
    let loop = opts && 'loop' in opts ? opts.loop : 0;
    let enabled = opts && 'enabled' in opts ? opts.enabled : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[period$] = period;
    this[direction$] = direction;
    this[loop$] = loop;
    this[enabled$] = enabled;
    this[gradient$] = new gradient.LinearGradient.new({begin: alignment.Alignment.topLeft, end: alignment.Alignment.centerRight, colors: JSArrayOfColor().of([baseColor, baseColor, highlightColor, baseColor, baseColor]), stops: JSArrayOfdouble().of([0.0, 0.35, 0.5, 0.65, 1.0])});
    shimmer$.Shimmer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shimmer$.Shimmer.prototype;
  dart.addTypeTests(shimmer$.Shimmer);
  dart.setMethodSignature(shimmer$.Shimmer, () => ({
    __proto__: dart.getMethods(shimmer$.Shimmer.__proto__),
    createState: dart.fnType(shimmer$._ShimmerState, [])
  }));
  dart.setLibraryUri(shimmer$.Shimmer, "package:shimmer/shimmer.dart");
  dart.setFieldSignature(shimmer$.Shimmer, () => ({
    __proto__: dart.getFields(shimmer$.Shimmer.__proto__),
    child: dart.finalFieldType(framework.Widget),
    period: dart.finalFieldType(core.Duration),
    direction: dart.finalFieldType(shimmer$.ShimmerDirection),
    gradient: dart.finalFieldType(gradient.Gradient),
    loop: dart.finalFieldType(core.int),
    enabled: dart.finalFieldType(core.bool)
  }));
  const _controller = dart.privateName(shimmer$, "_controller");
  const _count = dart.privateName(shimmer$, "_count");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C7;
  let C6;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(shimmer$.Shimmer) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(shimmer$.Shimmer)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(shimmer$.Shimmer));
  shimmer$._ShimmerState = class _ShimmerState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0;
      super.initState();
      this[_count] = 0;
      this[_controller] = (t0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.period}), t0.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this[_count] = dart.notNull(this[_count]) + 1;
          if (dart.notNull(this.widget.loop) <= 0) {
            this[_controller].repeat();
          } else if (dart.notNull(this[_count]) < dart.notNull(this.widget.loop)) {
            this[_controller].forward({from: 0.0});
          }
        }
      }, AnimationStatusToNull())), t0);
      if (dart.test(this.widget.enabled)) this[_controller].forward();
    }
    didUpdateWidget(oldWidget) {
      shimmer$.Shimmer._check(oldWidget);
      if (dart.test(this.widget.enabled)) {
        this[_controller].forward();
      } else {
        this[_controller].stop();
      }
      super.didUpdateWidget(oldWidget);
    }
    build(context) {
      return new transitions.AnimatedBuilder.new({animation: this[_controller], child: this.widget.child, builder: dart.fn((context, child) => new shimmer$._Shimmer.new({child: child, direction: this.widget.direction, gradient: this.widget.gradient, percent: this[_controller].value, enabled: this.widget.enabled, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), BuildContextAndWidgetTo_Shimmer()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
  };
  (shimmer$._ShimmerState.new = function() {
    this[_controller] = null;
    this[_count] = null;
    shimmer$._ShimmerState.__proto__.new.call(this);
    ;
  }).prototype = shimmer$._ShimmerState.prototype;
  dart.addTypeTests(shimmer$._ShimmerState);
  dart.setMethodSignature(shimmer$._ShimmerState, () => ({
    __proto__: dart.getMethods(shimmer$._ShimmerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(shimmer$._ShimmerState, "package:shimmer/shimmer.dart");
  dart.setFieldSignature(shimmer$._ShimmerState, () => ({
    __proto__: dart.getFields(shimmer$._ShimmerState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_count]: dart.fieldType(core.int)
  }));
  shimmer$._Shimmer = class _Shimmer extends framework.SingleChildRenderObjectWidget {
    createRenderObject(context) {
      return new shimmer$._ShimmerFilter.new(this.percent, this.direction, this.gradient, this.enabled);
    }
    updateRenderObject(context, shimmer) {
      shimmer$._ShimmerFilter._check(shimmer);
      shimmer.percent = this.percent;
      shimmer.enabled = this.enabled;
    }
  };
  (shimmer$._Shimmer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let percent = opts && 'percent' in opts ? opts.percent : null;
    let direction = opts && 'direction' in opts ? opts.direction : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.percent = percent;
    this.direction = direction;
    this.gradient = gradient;
    this.enabled = enabled;
    shimmer$._Shimmer.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = shimmer$._Shimmer.prototype;
  dart.addTypeTests(shimmer$._Shimmer);
  dart.setMethodSignature(shimmer$._Shimmer, () => ({
    __proto__: dart.getMethods(shimmer$._Shimmer.__proto__),
    createRenderObject: dart.fnType(shimmer$._ShimmerFilter, [framework.BuildContext])
  }));
  dart.setLibraryUri(shimmer$._Shimmer, "package:shimmer/shimmer.dart");
  dart.setFieldSignature(shimmer$._Shimmer, () => ({
    __proto__: dart.getFields(shimmer$._Shimmer.__proto__),
    percent: dart.finalFieldType(core.double),
    direction: dart.finalFieldType(shimmer$.ShimmerDirection),
    gradient: dart.finalFieldType(gradient.Gradient),
    enabled: dart.finalFieldType(core.bool)
  }));
  const _clearPaint = dart.privateName(shimmer$, "_clearPaint");
  const _rect = dart.privateName(shimmer$, "_rect");
  const _percent$ = dart.privateName(shimmer$, "_percent");
  const _direction$ = dart.privateName(shimmer$, "_direction");
  const _gradient$ = dart.privateName(shimmer$, "_gradient");
  const _gradientPaint = dart.privateName(shimmer$, "_gradientPaint");
  const _offset = dart.privateName(shimmer$, "_offset");
  shimmer$._ShimmerFilter = class _ShimmerFilter extends proxy_box.RenderProxyBox {
    get alwaysNeedsCompositing() {
      return this.child != null;
    }
    set percent(newValue) {
      if (newValue != this[_percent$]) {
        this[_percent$] = newValue;
        this.markNeedsPaint();
      }
    }
    paint(context, offset) {
      if (this.child != null) {
        if (!dart.test(this.needsCompositing)) dart.assertFailed(null, "org-dartlang-app:///packages/shimmer/shimmer.dart", 230, 14, "needsCompositing");
        context.canvas.saveLayer(offset['&'](this.child.size), this[_clearPaint]);
        context.paintChild(this.child, offset);
        let width = this.child.size.width;
        let height = this.child.size.height;
        let rect = null;
        let dx = null;
        let dy = null;
        if (dart.equals(this[_direction$], shimmer$.ShimmerDirection.rtl)) {
          dx = this[_offset](width, -dart.notNull(width), this[_percent$]);
          dy = 0.0;
          rect = new ui.Rect.fromLTWH(dart.notNull(offset.dx) - dart.notNull(width), offset.dy, 3 * dart.notNull(width), height);
        } else if (dart.equals(this[_direction$], shimmer$.ShimmerDirection.ttb)) {
          dx = 0.0;
          dy = this[_offset](-dart.notNull(height), height, this[_percent$]);
          rect = new ui.Rect.fromLTWH(offset.dx, dart.notNull(offset.dy) - dart.notNull(height), width, 3 * dart.notNull(height));
        } else if (dart.equals(this[_direction$], shimmer$.ShimmerDirection.btt)) {
          dx = 0.0;
          dy = this[_offset](height, -dart.notNull(height), this[_percent$]);
          rect = new ui.Rect.fromLTWH(offset.dx, dart.notNull(offset.dy) - dart.notNull(height), width, 3 * dart.notNull(height));
        } else {
          dx = this[_offset](-dart.notNull(width), width, this[_percent$]);
          dy = 0.0;
          rect = new ui.Rect.fromLTWH(dart.notNull(offset.dx) - dart.notNull(width), offset.dy, 3 * dart.notNull(width), height);
        }
        if (!dart.equals(this[_rect], rect)) {
          this[_gradientPaint].shader = this[_gradient$].createShader(rect);
          this[_rect] = rect;
        }
        context.canvas.translate(dx, dy);
        context.canvas.drawRect(rect, this[_gradientPaint]);
        context.canvas.restore();
      }
    }
    [_offset](start, end, percent) {
      return dart.notNull(start) + (dart.notNull(end) - dart.notNull(start)) * dart.notNull(percent);
    }
  };
  (shimmer$._ShimmerFilter.new = function(_percent, _direction, _gradient, enabled) {
    let t0;
    this[_clearPaint] = new ui.Paint.new();
    this[_rect] = null;
    this[_percent$] = _percent;
    this[_direction$] = _direction;
    this[_gradient$] = _gradient;
    this.enabled = enabled;
    this[_gradientPaint] = (t0 = new ui.Paint.new(), t0.blendMode = ui.BlendMode.srcIn, t0);
    shimmer$._ShimmerFilter.__proto__.new.call(this);
    ;
  }).prototype = shimmer$._ShimmerFilter.prototype;
  dart.addTypeTests(shimmer$._ShimmerFilter);
  dart.setMethodSignature(shimmer$._ShimmerFilter, () => ({
    __proto__: dart.getMethods(shimmer$._ShimmerFilter.__proto__),
    [_offset]: dart.fnType(core.double, [core.double, core.double, core.double])
  }));
  dart.setSetterSignature(shimmer$._ShimmerFilter, () => ({
    __proto__: dart.getSetters(shimmer$._ShimmerFilter.__proto__),
    percent: core.double
  }));
  dart.setLibraryUri(shimmer$._ShimmerFilter, "package:shimmer/shimmer.dart");
  dart.setFieldSignature(shimmer$._ShimmerFilter, () => ({
    __proto__: dart.getFields(shimmer$._ShimmerFilter.__proto__),
    [_clearPaint]: dart.finalFieldType(ui.Paint),
    [_gradientPaint]: dart.finalFieldType(ui.Paint),
    [_gradient$]: dart.finalFieldType(gradient.Gradient),
    [_direction$]: dart.finalFieldType(shimmer$.ShimmerDirection),
    enabled: dart.fieldType(core.bool),
    [_percent$]: dart.fieldType(core.double),
    [_rect]: dart.fieldType(ui.Rect)
  }));
  dart.trackLibraries("packages/shimmer/shimmer", {
    "package:shimmer/shimmer.dart": shimmer$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shimmer.dart"],"names":[],"mappings":"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","file":"shimmer.ddc.js"}');
  // Exports:
  return {
    shimmer: shimmer$
  };
});

//# sourceMappingURL=shimmer.ddc.js.map
