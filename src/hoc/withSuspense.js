import React from "react";


export const withSuspens = (Component) => {
  return (props) => {
    return <React.Suspense fallback={<div>LOADING...</div>}>
      <Component {...props} />
    </React.Suspense>
  };
}