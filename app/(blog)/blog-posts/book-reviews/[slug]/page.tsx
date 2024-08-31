export default async function BookReview({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Book Review: {params.slug}</h1>
      <p>This is a tech article</p>
    </div>
  );
}
