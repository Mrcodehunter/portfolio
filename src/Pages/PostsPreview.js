import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { POSTS } from "./../Data/PostsData.js";
import "./PostsPreview.css";

export default function PostsPreview() {
  const navigate = useNavigate();
  const recent = useMemo(() => POSTS.slice(0, 2), []);

  const openOnPostsPage = (id) => {
    navigate(`/posts?id=${encodeURIComponent(id)}`, { state: { openId: id } });
  };

  return (
    <section id="posts" className="pp">
      <div className="pp-grid">
        {/* LEFT: circular image + keyword */}
        <aside className="pp-left">
          <img className="pp-photo" src="/avatar.jpg" alt="Profile" />
          <div className="pp-keyword">Posts</div>
        </aside>

        {/* RIGHT: two recent cards */}
        <div className="pp-right">
          <h2 className="pp-title">Recent Posts</h2>

          <div className="pp-cards">
            {recent.map((p) => (
              <article
                key={p.id}
                className="pp-card"
                onClick={() => openOnPostsPage(p.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openOnPostsPage(p.id)}
              >
                <h3 className="pp-name">{p.title}</h3>
                <div className="pp-meta">{new Date(p.date).toLocaleDateString()}</div>
                <p className="pp-excerpt">{p.excerpt}</p>
                <div className="pp-read">Read →</div>
              </article>
            ))}
          </div>

          <button className="btn btn-sm" onClick={() => navigate("/posts")}>
            View all posts
          </button>
        </div>
      </div>
    </section>
  );
}
