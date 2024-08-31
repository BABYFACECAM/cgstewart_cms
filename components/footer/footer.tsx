export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 w-full">
      <aside className="w-full max-w-full px-4">
        <p className="text-center break-words">
          Copyright © {new Date().getFullYear()} - All right reserved by CG
          Stewart
        </p>
        <p className="text-center break-words">
          Made with ❤️ & Next.js, TailwindCSS, DaisyUI, and AWS Amplify Gen 2
        </p>
      </aside>
    </footer>
  );
}
