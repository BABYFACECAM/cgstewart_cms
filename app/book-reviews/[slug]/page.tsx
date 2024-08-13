export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>My Book Review: {params.slug}</h1>
    </div>
  );
}
