export default function Footer() {
  return (
    <footer className="footer  bottom-0 footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by CG
          Stewart
        </p>
        <p>Made with ❤️ & Next.js, TailwindCSS, DaisyUI, and TursoDB </p>
      </aside>
    </footer>
  );
}
