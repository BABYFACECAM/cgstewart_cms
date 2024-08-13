export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>My Video Content: {params.slug}</h1>
    </div>
  );
}
