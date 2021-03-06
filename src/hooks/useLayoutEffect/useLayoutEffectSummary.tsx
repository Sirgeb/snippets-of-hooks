import React from "react";
import { FiLink } from "react-icons/fi";

export const useLayoutEffectSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useLayoutEffect</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--function">useLayoutEffect</code>(
          <code className="code-summary__signature--argument">effect</code>,
          <code className="code-summary__signature--argument">deps</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Has an identical signature to the useEffect Hook. The callback function passed
          to the useLayoutEffect Hook gets fired synchronously{" "}
          <b>only after all DOM mutations are complete</b>.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useLayoutEffect
          </a>
        </div>
      </div>
      <div className="code-summary__tips">
        <h5 className="code-summary__section-title">Tips</h5>
        <ul>
          <li>
            If you don't need to have an effect occur synchronously only when all DOM
            mutations are complete but before the user sees the update, use the{" "}
            <b>useEffect</b> Hook instead (which should be used for the vast majority of
            cases).
          </li>
        </ul>
      </div>
    </>
  );
};
