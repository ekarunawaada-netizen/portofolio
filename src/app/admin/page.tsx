import { createServerClient } from "../../lib/supabase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getSubmissions() {
  const supabase = createServerClient();

  const [contacts, quotes] = await Promise.all([
    supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false }),
  ]);

  return {
    contacts: contacts.data ?? [],
    quotes: quotes.data ?? [],
    contactError: contacts.error,
    quoteError: quotes.error,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ auth?: string }>;
}) {
  const params = await searchParams;
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";

  // Simple password gate via query string /?auth=yourpassword
  if (params.auth !== adminPassword) {
    redirect("/admin/login");
  }

  const { contacts, quotes } = await getSubmissions();

  return (
    <main className="min-h-screen bg-surface pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-on-tertiary-container text-xs font-bold uppercase tracking-widest">
            Admin Dashboard
          </span>
          <h1 className="text-4xl font-headline font-black text-primary tracking-tighter mt-2">
            MASONRY ARCHITECT
          </h1>
          <p className="text-secondary mt-1">
            Total masuk:{" "}
            <strong>{contacts.length}</strong> pesan kontak &amp;{" "}
            <strong>{quotes.length}</strong> permintaan penawaran
          </p>
        </div>

        {/* Quote Requests */}
        <section className="mb-16">
          <h2 className="text-2xl font-headline font-black text-primary uppercase tracking-tight mb-6 pb-3 border-b-2 border-surface-container-highest">
            Permintaan Penawaran ({quotes.length})
          </h2>
          {quotes.length === 0 ? (
            <p className="text-secondary text-sm">Belum ada permintaan masuk.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-on-primary text-xs uppercase tracking-widest">
                    <th className="px-4 py-3 text-left">Waktu</th>
                    <th className="px-4 py-3 text-left">Nama</th>
                    <th className="px-4 py-3 text-left">Telepon</th>
                    <th className="px-4 py-3 text-left">Layanan</th>
                    <th className="px-4 py-3 text-left">Alamat</th>
                    <th className="px-4 py-3 text-left">Pesan</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((q: Record<string, string>, i: number) => (
                    <tr
                      key={q.id}
                      className={i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}
                    >
                      <td className="px-4 py-3 text-secondary whitespace-nowrap">
                        {formatDate(q.created_at)}
                      </td>
                      <td className="px-4 py-3 font-bold text-primary">{q.name}</td>
                      <td className="px-4 py-3">
                        <a
                          href={`https://wa.me/${q.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-tertiary-container underline font-medium"
                        >
                          {q.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-surface-container-highest px-2 py-1 text-xs font-bold rounded-sm">
                          {q.service}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-secondary">{q.address || "-"}</td>
                      <td className="px-4 py-3 text-secondary max-w-xs truncate">
                        {q.message || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Contact Submissions */}
        <section>
          <h2 className="text-2xl font-headline font-black text-primary uppercase tracking-tight mb-6 pb-3 border-b-2 border-surface-container-highest">
            Pesan Kontak ({contacts.length})
          </h2>
          {contacts.length === 0 ? (
            <p className="text-secondary text-sm">Belum ada pesan masuk.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-container-highest text-primary text-xs uppercase tracking-widest">
                    <th className="px-4 py-3 text-left">Waktu</th>
                    <th className="px-4 py-3 text-left">Nama</th>
                    <th className="px-4 py-3 text-left">Telepon</th>
                    <th className="px-4 py-3 text-left">Jenis Proyek</th>
                    <th className="px-4 py-3 text-left">Alamat</th>
                    <th className="px-4 py-3 text-left">Pesan</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c: Record<string, string>, i: number) => (
                    <tr
                      key={c.id}
                      className={i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}
                    >
                      <td className="px-4 py-3 text-secondary whitespace-nowrap">
                        {formatDate(c.created_at)}
                      </td>
                      <td className="px-4 py-3 font-bold text-primary">{c.name}</td>
                      <td className="px-4 py-3">
                        <a
                          href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-tertiary-container underline font-medium"
                        >
                          {c.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3">{c.project_type || "-"}</td>
                      <td className="px-4 py-3 text-secondary">{c.address || "-"}</td>
                      <td className="px-4 py-3 text-secondary max-w-xs truncate">
                        {c.message || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
