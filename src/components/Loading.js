import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-grow spinner-grow-sm text-primary" role="status"/>
      <div
        className="spinner-grow spinner-grow-sm text-primary"
        role="status"
      />
      <div
        className="spinner-grow spinner-grow-sm text-primary"
        role="status"
      />
      <strong style={{lineHeight: "1"}}>Yükleniyor</strong>
      <div
        className="spinner-grow spinner-grow-sm text-primary"
        role="status"
      />
      <div
        className="spinner-grow spinner-grow-sm text-primary"
        role="status"
      />
      <div
        className="spinner-grow spinner-grow-sm text-primary"
        role="status"
      />
    </div>
  );
};

export default Loading;
