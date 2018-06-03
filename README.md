# ownprops-reselect

## Usage

```javascript

  import { ownProp, ownPropsSelector } from 'ownprops-reselect';

  const somePropSelector = ownProp('someProp');

  createSelector([
    somePropSelector,
  ], (someProp) => someProp + 1);

  // or

  createSelector([
    ownPropsSelector
  ], (ownProps) => ownProps.someProp);

```

## LICENSE

MIT
