import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <h1>CG Stewart</h1>
        <h2>Menu</h2>
        <ul className="flex gap-2">
          <Link href="/" className="underline">
            Home
          </Link>
          <Link href="/blog-posts">Blog</Link>
          <Link href="my-projects">Projects</Link>
          <Link href="/book-reviews">Book Reviews</Link>
          <Link href="/video-content">Video Content</Link>
          <Link href="/contact-me">Contact Me</Link>
        </ul>
      </div>
    </main>
  );
}
