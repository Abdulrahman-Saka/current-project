import { Children } from "react";

export default function ({ Children, classesName, functionName }) {
  return (
    <button onClick={functionName} className={classesName}>
      {Children}
    </button>
  );
}
