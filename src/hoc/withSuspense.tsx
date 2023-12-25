import React from "react";


export function withSuspens<WCP>(WrappedComponent: React.ComponentType<WCP>){
  return (props: WCP) => {
    return <React.Suspense fallback={<div>LOADING...</div>}>
      <WrappedComponent {...props} />
    </React.Suspense>
  };
}