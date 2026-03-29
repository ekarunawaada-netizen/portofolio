export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center">
      <div className="bg-white p-12 max-w-sm w-full shadow-xl">
        <h1 className="text-2xl font-headline font-black text-primary tracking-tight mb-2">
          Admin Access
        </h1>
        <p className="text-secondary text-sm mb-6">
          Akses dashboard via:{" "}
          <code className="bg-surface-container px-2 py-1 text-xs">/admin?auth=password</code>
        </p>
        <form action="/admin" method="GET">
          <input
            name="auth"
            type="password"
            placeholder="Masukkan password admin"
            className="w-full bg-surface-container-high border-none p-4 focus:ring-2 focus:ring-primary text-primary mb-4"
          />
          <button
            type="submit"
            className="w-full bg-primary text-on-primary font-bold py-3 hover:opacity-90 transition-opacity"
          >
            Masuk
          </button>
        </form>
      </div>
    </main>
  );
}
