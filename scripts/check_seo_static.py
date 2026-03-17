from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def has_meta(html: str, marker: str) -> bool:
    return marker in html


def main() -> None:
    pages = {
        "index.html": read("index.html"),
        "about.html": read("about.html"),
        "blog.html": read("blog.html"),
        "portfolio.html": read("portfolio.html"),
    }

    require((ROOT / "robots.txt").exists(), "robots.txt is missing")
    require((ROOT / "sitemap.xml").exists(), "sitemap.xml is missing")

    for name, html in pages.items():
        require(has_meta(html, 'rel="canonical"'), f"{name}: canonical is missing")
        require(has_meta(html, 'property="og:title"'), f"{name}: og:title is missing")
        require(has_meta(html, 'name="twitter:card"'), f"{name}: twitter:card is missing")

    blog_html = pages["blog.html"]
    require('class="article-small"' in blog_html, "blog.html: static article list is missing")
    require('data-blog-feed-list' not in blog_html, "blog.html: dynamic feed hook should be removed")

    print("SEO static checks: PASS")


if __name__ == "__main__":
    main()
