define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shimmer = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/myapp/shimmer/shimmer", {
    "package:myapp/shimmer/shimmer.dart": shimmer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"shimmer.ddc.js"}');
  // Exports:
  return {
    shimmer__shimmer: shimmer
  };
});

//# sourceMappingURL=shimmer.ddc.js.map
