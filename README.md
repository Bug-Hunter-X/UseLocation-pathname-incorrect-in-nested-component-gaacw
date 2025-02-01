# React Router v6 useLocation Pathname Issue in Nested Components

This repository demonstrates a common issue encountered when using the `useLocation` hook in React Router v6 within nested components.  The problem arises when accessing the `pathname` property outside the context of a route component, leading to incorrect or stale pathname values.

The `IncorrectPathname.jsx` file shows the problem, and `CorrectPathname.jsx` demonstrates the solution.

## Problem

The `useLocation` hook within a nested component may not reflect the current route initially or after navigation. This is because it's dependent on the React Router context and not always available when the hook is invoked.

## Solution

Several approaches can address this issue:

1. **Pass the location prop:** Pass the current location using props from the parent component that is directly rendered by a Route to the child components.
2. **useParams instead of useLocation if possible**: If you only need information that is passed in the route itself, use useParams() instead.