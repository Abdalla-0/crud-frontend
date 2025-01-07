import React from "react";
import { TLoading } from "../../types";

type TLoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ children, loading, error }: TLoadingProps) => {
  // Check if children is a valid React element
  const isReactElement = React.isValidElement(children);

  const renderHandler = () => {
    // Determine the type of the children if it's a valid React element
    const elementType = isReactElement ? children.type : null;

    // Check if the child is a Button
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (isReactElement && (elementType as any).displayName === "Button") {
      const cloneBtn = React.cloneElement(
        children as React.ReactElement<HTMLButtonElement>,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading === "pending" ? (
            cloneBtn
          ) : error ? (
            <>
              {children}
              <p className="mt-3">{error}</p>
            </>
          ) : (
            children
          )}
        </>
      );
    }

    // Default rendering for non-Button children
    return (
      <>
        {loading === "pending" ? (
          <h2 className="text-center mt-5">Loading please wait...</h2>
        ) : error ? (
          <h2 className="text-center mt-5">Cannot find your page (404)</h2>
        ) : (
          children
        )}
      </>
    );
  };

  return renderHandler();
};

export default Loading;
