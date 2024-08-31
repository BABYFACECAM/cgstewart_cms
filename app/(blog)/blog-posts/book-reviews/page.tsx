import Link from "next/link";

export default function BookReviews() {
  const reviews = [
    { slug: "review-1", title: "Book Review 1" },
    { slug: "review-2", title: "Book Review 2" },
  ];

  return (
    <div>
      <h1>Book Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.slug}>
            <Link href={`/blog-posts/book-reviews/${review.slug}`}>
              {review.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
