import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { DashboardClient } from "@/components/admin/DashboardClient";

async function getSubmissions() {
  const [contacts, quotes] = await Promise.all([
    prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.quoteRequest.findMany({ orderBy: { createdAt: "desc" } }),
  ]);
  return { contacts, quotes };
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const auth = params.auth;
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";

  if (auth !== adminPassword) {
    redirect("/admin/login");
  }

  const { contacts, quotes } = await getSubmissions();

  return <DashboardClient contacts={contacts} quotes={quotes} />;
}
