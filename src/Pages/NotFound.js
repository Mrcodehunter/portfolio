import { Link } from "react-router-dom";

import useDocumentTitle from "./../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Not found");

  return (
    <div className="shell page">
      <p className="eyebrow">404</p>
      <h1 className="page-title">Page not found</h1>
      <p className="lede">That page does not exist — it may have moved or been renamed.</p>
      <Link className="btn btn-primary" to="/" style={{ marginTop: "var(--space-6)" }}>
        Back to home
      </Link>
    </div>
  );
}
