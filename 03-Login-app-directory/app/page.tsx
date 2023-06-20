import Auth from "@/components/Auth";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Auth />
      <main className="flex flex-col items-center justify-center p-24 ">
        <div>Routes in this application</div>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <h1>Middleware Protected routes</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </main>
    </>
  );
}
