import { FC } from "react";
import DashboardContent from "@/components/DashboardContent";
import Link from "next/link";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <DashboardContent />
      <div className="mt-10 mb-20 flex flex-col items-center">
        <Link href="/">Back to Home</Link>
        <Link href="/blog" className="mt-5">
          Blog(protected route)
        </Link>
      </div>
    </>
  );
};

export default page;
