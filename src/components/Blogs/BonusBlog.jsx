import React from "react";

const BonusBlog = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl text-center font-bold text-gray-800">Bonus Blog</h1>

      <div className="bg-teal-50 shadow-md rounded mt-3">
        <h2 className="text-center font-semibold text-2xl mt-2">Props vs state</h2>
        <div className="p-5 text-justify">
          <li>
            <b>Props</b> are the properties of a component. They are passed from parent to child
            component. They are immutable. They are read-only. They are passed as arguments to a
            function.
          </li>

          <li>
            <b>State</b> is the data of a component. It is managed within the component. It is
            mutable. It is read-write. It is accessed using useState hook.
          </li>
        </div>
      </div>

      <div className="bg-teal-50 shadow-md rounded mt-3">
        <h2 className="text-center font-semibold text-2xl mt-2">How does useState work?</h2>
        <div className="p-5 text-justify">
          <b>useState</b> is a hook that is used to manage state in the components. It returns an
          array with two elements. The first element is the state variable and the second element is
          a function that is used to update the state variable.
        </div>
      </div>

      <div className="bg-teal-50 shadow-md rounded mt-3">
        <h2 className="text-center font-semibold text-2xl mt-2">
          Purpose of useEffect other than fetching data.
        </h2>
        <div className="p-5 text-justify">
          <p>
            <b>useEffect</b> is a hook that is used to perform side effects in functional
            components. It is used to fetch data from an API, set up event listeners, etc. It can be
            used to perform any side effect. It is called after every render. It can be called after
            every state update, after every props update. It can also be called after every
            component update.
          </p>
        </div>
      </div>
      <div className="bg-teal-50 shadow-md rounded mt-3">
        <h2 className="text-center font-semibold text-2xl mt-2">How Does React work?</h2>
        <div className="p-5 text-justify">
          <p>
            <b>React</b> is a JavaScript library for building user interfaces.It is used to build
            reusable UI components.
            <br />
            <b>React</b> uses JSX. It is a syntax extension to JavaScript. It is used to write HTML
            in React. It is used to write XML-like code for elements and components. It is used to
            write components.React uses a unidirectional data flow or data binding. It is a one way
            data flow. It is used to pass data from parent to child component. It is used to pass
            data from child to parent component. It is used to pass data from sibling to sibling
            component.
            <br />
            <b>React</b> creates a virtual DOM in memory. It keeps track of changes in the virtual
            DOM. It updates the real DOM only when there is a change in the virtual DOM. When the
            state of a component changes, it re-renders the component. It comaares the previous
            virtual DOM with the new virtual DOM. Then it updates the real DOM. It uses a virtual
            DOM because it is faster than the real DOM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonusBlog;
