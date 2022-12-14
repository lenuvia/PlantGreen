import React from "react";

function LoadingSpinner() {
  return (
    <div className="spinner-border warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default LoadingSpinner;
