import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center p-24 ">
        <h1>
          This is a route protected by the middleware. Should not be visible if
          the user is not logged in
        </h1>
        <div className="mt-10 flex flex-col items-center">
          <Link href="/">Back to Home</Link>
          <Link href="/dashboard" className="mt-5">
            Back to Dashboard
          </Link>
          <Link href="/about" className="mt-5">
            About (protected route)
          </Link>
          <Link href="/blog/3" className="mt-5">
            Blog Slog Page (protected route)
          </Link>
        </div>
      </main>
    </>
  );
};

export default page;
