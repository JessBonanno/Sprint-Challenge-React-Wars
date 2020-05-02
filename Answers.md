# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

It is a library for building UIs with interactivity. It solves the problem of slow rendering and rerendering of the DOM with state changes. React includes a virtual DOM that it compares to the actual DOM and only rerenders what has been changed and nothing else without having to reload the page.

1. Describe component state.

component state is a way of storing and updating any piece of data that might change within the react application.

1. Describe props.

props are just read only properties passed down to children components so that they may use them from their parents.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

side effects are events that affect something other than the current function being run. You sync effects in react components with the useEffect hook and you may or may not give this dependancies to determine when and how often they may run.
