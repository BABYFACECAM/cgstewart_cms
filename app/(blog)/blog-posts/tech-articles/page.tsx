import Link from "next/link";

export default function TechArticles() {
  const articles = [
    {
      slug: "article-1",
      title: "Article 1",
    },
    {
      slug: "article-2",
      title: "Article 2",
    },
    {
      slug: "article-3",
      title: "Article 3",
    },
  ];

  return (
    <div>
      <h1>Tech Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/blog-posts/tech-articles/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
