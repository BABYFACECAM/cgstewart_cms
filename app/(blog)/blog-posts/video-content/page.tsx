import Link from "next/link";

export default function VideoContent() {
  const videos = [
    { slug: "video-1", title: "Video 1" },
    { slug: "video-2", title: "Video 2" },
  ];

  return (
    <div>
      <h1>Video Content</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.slug}>
            <Link href={`/blog-posts/video-content/${video.slug}`}>
              {video.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
