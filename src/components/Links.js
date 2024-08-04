import React from "react";

function Link({ github, linkedin }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <br />
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Link;
