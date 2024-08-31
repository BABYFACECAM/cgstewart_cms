import Link from "next/link";

export default function BlogPosts() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <nav>
        <ul>
          <li>
            <Link href="/blog-posts/tech-articles">Tech Articles</Link>
          </li>
          <li>
            <Link href="/blog-posts/video-content">Video Content</Link>
          </li>
          <li>
            <Link href="/blog-posts/book-reviews">Tech Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
