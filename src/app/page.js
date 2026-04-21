


export default function Home() {
  return (
    <main className="p-8">
      <h1>Next.js App Router Practice</h1>
      <nav className="space-y-2">
        <a href="/dashboard" className="block text-blue-600 hover:underline">
          dashboard
        </a>
        <a href="/blog" className="block text-blue-600 hover:underline">
          Blog
        </a>
        <a href="/products" className="block text-blue-600 hover:underline">
          products
        </a>
        <a href="/login" className="block text-blue-600 hover:underline">
          login
        </a>
      </nav>
    </main>
  );
}
