function ownPropsSelector(__, ownProps) {
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

exports.ownPropsSelector = ownPropsSelector;
exports.ownProp = ownPropSelectorCreator;
