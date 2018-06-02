exports.ownPropsSelector = function(__, ownProps) {
  return ownProps;
}

function ownPropSelectorCreator(name) {
  if (!name) {
    return ownPropsSelector;
  }

  return function() {
    var props = ownPropsSelector.apply(null, arguments);

    return props[name];
  }
}

exports.ownPropSelectorCreator = exports.ownPropSelectorCreator;
exports.ownProp = ownPropSelectorCreator;
