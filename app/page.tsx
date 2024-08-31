import WorkTimeline from "@/components/timeline/work-timeline";

const posts = [
  {
    id: 1,
    title: "Building a blog with Next.js",
    description: "Learn how to build a blog with Next.js",
    button: "Read Post",
  },
  {
    id: 2,
    title: "AWS Lambda with Node.js",
    description: "Learn how to use AWS Lambda with Node.js",
    button: "Read Post",
  },
  {
    id: 3,
    title: "Java with Spring Boot",
    description: "Learn how to use Java with Spring Boot",
    button: "Read Post",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4 hero-content">
        <h1>CG STEWART image or whatever</h1>
      </div>
      <section id="about" className="flex flex-col m-2">
        <h2>About me</h2>
        <p className="gap-2 space-y-2 p-1">
          I am a software engineer and a writer. I love to build things and
          write about them. My current working tech stack is &quot;tech stack
          icons&quot;
        </p>
        <div>
          <h2>My Startups</h2>
          <p className="gap-2 space-y-2 p-1">
            Here&apos;s some stuff I&apos;ve built to monetize my skills
          </p>
        </div>
      </section>
      <section id="work-experience">
        <div className="divider divider-primary"></div>
        <WorkTimeline />
      </section>
      <div className="divider divider-primary"></div>
      <section id="blog-posts" className="flex flex-col  justify-center p-1">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="flex flex-col gap-2 items-center space-x-2 space-y-2 p-2 text-3xl font-bold">
            Blog posts
          </h2>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="card card-compact outline text-primary w-96"
            >
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-primary text-black  hover:btn-success">
                    {post.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary hover:btn-success">View All</button>
      </section>
      <div className="divider divider-primary"></div>
    </main>
  );
}
