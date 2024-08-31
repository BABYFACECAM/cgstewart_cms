export default async function TechArticle({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Tech Article: {params.slug}</h1>
      <p>This is a tech article</p>
    </div>
  );
}
