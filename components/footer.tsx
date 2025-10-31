export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Wirtschaftswunder Museum</h3>
            <p className="text-primary-foreground/70 text-sm">
              Exploring Germany's remarkable economic transformation after World War II
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Exhibitions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="/timeline" className="hover:text-primary-foreground transition">
                  Timeline
                </a>
              </li>
              <li>
                <a href="/leaders" className="hover:text-primary-foreground transition">
                  Leaders
                </a>
              </li>
              <li>
                <a href="/policies" className="hover:text-primary-foreground transition">
                  Policies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="/context" className="hover:text-primary-foreground transition">
                  Context
                </a>
              </li>
              <li>
                <a href="/legacy" className="hover:text-primary-foreground transition">
                  Legacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Wirtschaftswunder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition"
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <a
                  href="https://www.britannica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition"
                >
                  Britannica
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Wirtschaftswunder Digital Museum. Educational resource.</p>
        </div>
      </div>
    </footer>
  )
}