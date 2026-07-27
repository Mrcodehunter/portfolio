import { useEffect } from "react";

import { PROFILE } from "./../data/resume";

const SUFFIX = `${PROFILE.name} — ${PROFILE.role}`;

/**
 * Sets the document title per route. Pass nothing on the home page to use the
 * bare site title. Without this, every route would keep the title from
 * public/index.html, which hurts both tab clarity and search results.
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${SUFFIX}` : SUFFIX;
  }, [title]);
}
