import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="flex justify-between p-5 items-center bg-slate-700 text-neutral-200">
        <div className="flex items-center ">
          <div className="">
            <a href="https://passage.id/">
              <Image src="/logo.svg" alt="logo" width={60} height={60} />
            </a>
          </div>
          <div className="text-lg lg:text-3xl">
            Passage + Next.js Example With /app directory and tailwindcss
          </div>
        </div>
        <div>
          <a href="https://passage.id/">Go to Passage</a>
        </div>
      </div>
    </>
  );
}
