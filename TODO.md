- TypeScript have problems figuring out react-redux's `connect()` return type.
  e.g., `dispatch` will be mapped as a prop in `ConnectedComponent`, but
  TypeScript does not know about this, it keeps complaining that `dispatch`
  is not found.
