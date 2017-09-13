# Redux
1. The whole state of your app is stored in an object tree inside a single store.
1. The only way to change the state tree is to emit an action, an object describing what happened.
1. To specify how the actions transform the state tree, you write pure reducers.

## Redux Store
Three Methods:
 1. ```subscribe```
  - invoked whenever the state changes. ( use react redux instead)
 1. ```getState```
 1. ```dispatch```
  - send an action that describes how you want the state to change.


# React Redux

#### Provider
React Redux exposes the Provider component to handle passing our store to every container component. We'll generally use this to wrap the root component of our app, e.g. 
```html
  <Provider store={store}> ... </Provider>.
```

#### Connect
```html
connect(mapStateToProps)(Component) => Component
```

- used to access state of store in the container components.
- connects container components to the store.
- will automatically have dispatch prop

We use connect() to access the state of our store in our container components. Call connect(mapStateToProps) with a function that takes the state of the store, mapping it to props to be passed into our container component, (state) => props. Calling connect() returns another function, which we should then call with our container component, ```connect(...)(Component)```, to get a "connected" component. This connected component will automatically have a dispatch prop (for dispatching actions), and the result of mapStateToProps will be merged into the component's props.