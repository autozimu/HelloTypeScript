- TypeScript have problems figuring out react-redux's `connect()` return type.
  e.g., `notes` will be mapped as a prop by react-redux in `LaneComponent`,
  but TypeScript does not know about this, it keeps complaining that `notes`
  property is not found.
- `redux-devtools-extension` types.
