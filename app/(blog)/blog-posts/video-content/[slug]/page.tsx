export default async function VideoContent({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Video Content: {params.slug}</h1>
      <p>This is a tech article</p>
    </div>
  );
}
