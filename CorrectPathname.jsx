Instead of directly using `useLocation` in a nested component, pass the necessary information as props from the parent component.  This ensures the data is correctly available to the child component.

Here's how to modify the code:

**IncorrectPathname.jsx:**
```jsx
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  console.log('pathname:', location.pathname);
  return (
    <div>
      <p>Current Pathname: {location.pathname}</p>
    </div>
  );
}

export default MyComponent;
```

**CorrectPathname.jsx:**
```jsx
import { useLocation } from 'react-router-dom';

function ParentComponent() {
  const location = useLocation();

  return (
    <div>
      <MyComponent location={location} />
    </div>
  );
}

function MyComponent({ location }) {
  console.log('pathname:', location.pathname);
  return (
    <div>
      <p>Current Pathname: {location.pathname}</p>
    </div>
  );
}

export default ParentComponent;
```
The `ParentComponent` now directly receives the `location` object from the React Router context and passes it down as a prop to `MyComponent`.  `MyComponent` reliably receives the correct `pathname`.