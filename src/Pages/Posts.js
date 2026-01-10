import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams, useParams } from "react-router-dom";
import { POSTS } from "./../Data/PostsData.js";
import "./Posts.css";

export default function PostsPage() {
  const [openId, setOpenId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id: routeId } = useParams(); // optional /posts/:id
  const refs = useRef({});

  const allPosts = useMemo(
    () => POSTS.slice().sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  // Auto-expand based on state, ?id=, or /posts/:id
  useEffect(() => {
    const fromState = location.state && location.state.openId;
    const fromQuery = searchParams.get("id");
    const initial = fromState || fromQuery || routeId || null;
    if (initial && allPosts.some((p) => p.id === initial)) {
      setOpenId(initial);
      setTimeout(() => {
        const el = refs.current[initial];
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  const gotoPermalink = (id) => {
    // Keep URL shareable and preserve current expansion
    navigate(`/posts?id=${encodeURIComponent(id)}`, {
      replace: true,
      state: { openId: id },
    });
  };

  return (
    <section className="posts-page">
      <div className="posts-wrap">
        <h1 className="posts-title">All Posts</h1>

        <ol className="posts-list">
          {allPosts.map((p) => {
            const open = openId === p.id;
            return (
              <li key={p.id}>
                <article
                  className={`post-accordion ${open ? "open" : ""}`}
                  ref={(el) => (refs.current[p.id] = el)}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(p.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(p.id);
                    }
                  }}
                >
                  <header className="post-acc-head">
                    <div className="post-acc-title">{p.title}</div>
                    <div className="post-acc-date">{new Date(p.date).toLocaleDateString()}</div>
                    {/* removed the + / − icon */}
                    <button
                      className="post-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        gotoPermalink(p.id);
                      }}
                      title="Copyable link"
                    >
                      Permalink
                    </button>
                  </header>

                  <div className="post-acc-body" aria-hidden={!open}>
                    {open ? (
                      <div className="post-content">
                        {p.content.split("\n").map((line, i) => (
                          <p key={i}>{line.trim()}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="post-excerpt">{p.excerpt}</p>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
