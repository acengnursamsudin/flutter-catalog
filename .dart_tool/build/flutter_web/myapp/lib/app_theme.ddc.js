define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_theme = packages__flutter__material.src__material__text_theme;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const app_theme = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293783794.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294901502.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280365875.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282012000.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281416260.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280629312.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279707178.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283065714.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285953654.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281748052.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293849587.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294111986.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.04,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C15 || CT.C15,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "WorkSans",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C6 || CT.C6,
        [TextStyle_inherit]: true
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.2,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C15 || CT.C15,
        [TextStyle_fontSize]: 12,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "WorkSans",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C8 || CT.C8,
        [TextStyle_inherit]: true
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.05,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C15 || CT.C15,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "WorkSans",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C6 || CT.C6,
        [TextStyle_inherit]: true
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.2,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C15 || CT.C15,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "WorkSans",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C6 || CT.C6,
        [TextStyle_inherit]: true
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.18,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C20 || CT.C20,
        [TextStyle_fontSize]: 16,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "WorkSans",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C7 || CT.C7,
        [TextStyle_inherit]: true
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.27,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C20 || CT.C20,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "WorkSans",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C7 || CT.C7,
        [TextStyle_inherit]: true
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: 0.9,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: 0.4,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C20 || CT.C20,
        [TextStyle_fontSize]: 36,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "WorkSans",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C7 || CT.C7,
        [TextStyle_inherit]: true
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: text_theme.TextTheme.prototype,
        [TextTheme_overline]: null,
        [TextTheme_subtitle]: C14 || CT.C14,
        [TextTheme_button]: null,
        [TextTheme_caption]: C16 || CT.C16,
        [TextTheme_body1]: C17 || CT.C17,
        [TextTheme_body2]: C18 || CT.C18,
        [TextTheme_subhead]: null,
        [TextTheme_title]: C19 || CT.C19,
        [TextTheme_headline]: C21 || CT.C21,
        [TextTheme_display1]: C22 || CT.C22,
        [TextTheme_display2]: null,
        [TextTheme_display3]: null,
        [TextTheme_display4]: null
      });
    }
  });
  const Color_value = dart.privateName(ui, "Color.value");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  const TextTheme_overline = dart.privateName(text_theme, "TextTheme.overline");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C15;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C14;
  const TextTheme_subtitle = dart.privateName(text_theme, "TextTheme.subtitle");
  const TextTheme_button = dart.privateName(text_theme, "TextTheme.button");
  let C16;
  const TextTheme_caption = dart.privateName(text_theme, "TextTheme.caption");
  let C17;
  const TextTheme_body1 = dart.privateName(text_theme, "TextTheme.body1");
  let C18;
  const TextTheme_body2 = dart.privateName(text_theme, "TextTheme.body2");
  const TextTheme_subhead = dart.privateName(text_theme, "TextTheme.subhead");
  let C20;
  let C19;
  const TextTheme_title = dart.privateName(text_theme, "TextTheme.title");
  let C21;
  const TextTheme_headline = dart.privateName(text_theme, "TextTheme.headline");
  let C22;
  const TextTheme_display1 = dart.privateName(text_theme, "TextTheme.display1");
  const TextTheme_display2 = dart.privateName(text_theme, "TextTheme.display2");
  const TextTheme_display3 = dart.privateName(text_theme, "TextTheme.display3");
  const TextTheme_display4 = dart.privateName(text_theme, "TextTheme.display4");
  let C13;
  app_theme.AppTheme = class AppTheme extends core.Object {};
  (app_theme.AppTheme.__ = function() {
    ;
  }).prototype = app_theme.AppTheme.prototype;
  dart.addTypeTests(app_theme.AppTheme);
  dart.setLibraryUri(app_theme.AppTheme, "package:myapp/app_theme.dart");
  dart.defineLazy(app_theme.AppTheme, {
    /*app_theme.AppTheme.notWhite*/get notWhite() {
      return C0 || CT.C0;
    },
    /*app_theme.AppTheme.nearlyWhite*/get nearlyWhite() {
      return C1 || CT.C1;
    },
    /*app_theme.AppTheme.white*/get white() {
      return C2 || CT.C2;
    },
    /*app_theme.AppTheme.nearlyBlack*/get nearlyBlack() {
      return C3 || CT.C3;
    },
    /*app_theme.AppTheme.grey*/get grey() {
      return C4 || CT.C4;
    },
    /*app_theme.AppTheme.dark_grey*/get dark_grey() {
      return C5 || CT.C5;
    },
    /*app_theme.AppTheme.darkText*/get darkText() {
      return C6 || CT.C6;
    },
    /*app_theme.AppTheme.darkerText*/get darkerText() {
      return C7 || CT.C7;
    },
    /*app_theme.AppTheme.lightText*/get lightText() {
      return C8 || CT.C8;
    },
    /*app_theme.AppTheme.deactivatedText*/get deactivatedText() {
      return C9 || CT.C9;
    },
    /*app_theme.AppTheme.dismissibleBackground*/get dismissibleBackground() {
      return C10 || CT.C10;
    },
    /*app_theme.AppTheme.chipBackground*/get chipBackground() {
      return C11 || CT.C11;
    },
    /*app_theme.AppTheme.spacer*/get spacer() {
      return C12 || CT.C12;
    },
    /*app_theme.AppTheme.fontName*/get fontName() {
      return "WorkSans";
    },
    /*app_theme.AppTheme.textTheme*/get textTheme() {
      return C13 || CT.C13;
    },
    /*app_theme.AppTheme.display1*/get display1() {
      return C22 || CT.C22;
    },
    /*app_theme.AppTheme.headline*/get headline() {
      return C21 || CT.C21;
    },
    /*app_theme.AppTheme.title*/get title() {
      return C19 || CT.C19;
    },
    /*app_theme.AppTheme.subtitle*/get subtitle() {
      return C14 || CT.C14;
    },
    /*app_theme.AppTheme.body2*/get body2() {
      return C18 || CT.C18;
    },
    /*app_theme.AppTheme.body1*/get body1() {
      return C17 || CT.C17;
    },
    /*app_theme.AppTheme.caption*/get caption() {
      return C16 || CT.C16;
    }
  });
  dart.trackLibraries("packages/myapp/app_theme", {
    "package:myapp/app_theme.dart": app_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAGc;;;;MAEO,2BAAQ;;;MACR,8BAAW;;;MACX,wBAAK;;;MACL,8BAAW;;;MACX,uBAAI;;;MACJ,4BAAS;;;MAET,2BAAQ;;;MACR,6BAAU;;;MACV,4BAAS;;;MACT,kCAAe;;;MACf,wCAAqB;;;MACrB,iCAAc;;;MACd,yBAAM;;;MACL,2BAAQ;;;MAEL,4BAAS;;;MAUT,2BAAQ;;;MAUR,2BAAQ;;;MASR,wBAAK;;;MASL,2BAAQ;;;MASR,wBAAK;;;MASL,wBAAK;;;MASL,0BAAO","file":"app_theme.ddc.js"}');
  // Exports:
  return {
    app_theme: app_theme
  };
});

//# sourceMappingURL=app_theme.ddc.js.map
