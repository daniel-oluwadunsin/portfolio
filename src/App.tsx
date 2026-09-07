import { useEffect, useState, type ReactNode } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  aboutParagraphs,
  blogPosts,
  contactLinks,
  newsItems,
  projects,
  type ContentPart,
  type SiteLink,
} from "./siteData";

const pageMeta = {
  home: {
    title: "Daniel Adejare — Academic Portfolio",
    description:
      "Academic portfolio of Daniel Adejare, a software engineer and researcher interested in public-interest AI, data science, and accountable technology.",
  },
  blog: {
    title: "Blog — Daniel Adejare",
    description:
      "Writing by Daniel Adejare on software engineering, systems, and the lessons behind building useful technology.",
  },
};

function setMetaContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute("content", content);
}

function usePageMetadata() {
  const location = useLocation();

  useEffect(() => {
    const isBlog = location.pathname === "/blog";
    const meta = isBlog ? pageMeta.blog : pageMeta.home;

    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.description);

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${isBlog ? "/blog" : "/"}`;
  }, [location.pathname]);
}

function App() {
  usePageMetadata();

  return (
    <div className="site-shell">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
      <ScrollToTopButton />
    </div>
  );
}

function SiteHeader() {
  const location = useLocation();
  const onBlogPage = location.pathname === "/blog";
  const activeHash = location.hash || "#home";

  const navItems = [
    { label: "Home", href: onBlogPage ? "/#home" : "#home", hash: "#home" },
    {
      label: "Projects",
      href: onBlogPage ? "/#projects" : "#projects",
      hash: "#projects",
    },
    { label: "News", href: onBlogPage ? "/#news" : "#news", hash: "#news" },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          to="/#home"
          className="site-logo"
          aria-label="Daniel Adejare home"
        >
          <span className="sr-only">Daniel Adejare</span>
        </Link>

        <ThemeToggle />

        <nav aria-label="Primary navigation" className="site-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                activeHash === item.hash && !onBlogPage
                  ? "is-active"
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/blog"
            className={onBlogPage ? "is-active" : undefined}
            aria-current={onBlogPage ? "page" : undefined}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // Theme still works for the current session when storage is unavailable.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="theme-icon"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path
        strokeLinecap="round"
        d="M12 2.5v2M12 19.5v2M4.58 4.58l1.42 1.42M18 18l1.42 1.42M2.5 12h2M19.5 12h2M4.58 19.42 6 18M18 6l1.42-1.42"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="theme-icon"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.8A7.5 7.5 0 0 1 9.2 4.5 7.5 7.5 0 1 0 19.5 14.8Z"
      />
    </svg>
  );
}

function HomePage() {
  return (
    <main>
      <section id="home" className="hero">
        <h1>Daniel Adejare</h1>

        <div className="hero-content">
          <div className="hero-image">
            <img src="/profile.png" alt="Daniel Adejare in graduation attire" />
          </div>

          <div className="hero-text">
            <div className="social-links">
              {contactLinks.map((link) => (
                <ExternalLink key={link.label} link={link} />
              ))}
            </div>

            <div className="about-copy">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>
                  <RichText parts={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <SectionHeading>Projects</SectionHeading>
        <div className="project-list">
          {projects.map((project) => {
            const liveLink = project.links[0];

            return (
              <article key={project.name} className="project-item">
                <div>
                  <h3 className="project-title">
                    <a href={liveLink.href} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-technology">
                    <strong>Built with:</strong> {project.technology}
                  </p>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <ExternalLink key={link.label} link={link} />
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="news" className="content-section news-section">
        <SectionHeading>News</SectionHeading>
        <div className="news-list">
          {newsItems.map((item) => (
            <article
              key={`${item.date}-${item.content[0].text}`}
              className="news-item"
            >
              <p>
                <time>{item.date}:</time> <RichText parts={item.content} />
                {item.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="news-link"
                  >
                    (Link) ↗
                  </a>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogPage() {
  return (
    <main className="blog-section">
      <div className="blog-intro">
        <h1>Blog</h1>
        <p>
          Thoughts, insights, and experiences from my journey in software and
          technology.
        </p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="blog-card">
            <div className="blog-content">
              <div className="blog-meta">
                <time>{post.date}</time>
                <span>{post.readTime}</span>
              </div>
              <h2 className="blog-title">
                <a href={post.href} target="_blank" rel="noreferrer">
                  {post.title}
                </a>
              </h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a
                className="blog-link"
                href={post.href}
                target="_blank"
                rel="noreferrer"
              >
                Link to Blog
              </a>
              <p className="blog-author">By Daniel Adejare</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}

function RichText({ parts }: { parts: ContentPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        part.href ? (
          <ExternalLink
            key={`${part.text}-${index}`}
            link={{ label: part.text, href: part.href }}
          />
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        ),
      )}
    </>
  );
}

function ExternalLink({ link }: { link: SiteLink }) {
  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {link.label}
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="text-center">
        © Copyright {new Date().getFullYear()} Daniel Adejare. Last updated:
        September 7, 2026.
      </p>
    </footer>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="scroll-top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

export default App;
