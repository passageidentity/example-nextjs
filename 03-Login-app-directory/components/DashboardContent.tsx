"use client";
import { FC, useEffect, useState } from "react";
import { getCurrentUserInfo, PassageUserInfo } from "@/actions/getCurrentUserInfo";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { format } from "date-fns";

interface DashboardContentProps {}

const DashboardContent: FC<DashboardContentProps> = ({}) => {
  const [userInfo, setUserInfo] = useState<PassageUserInfo | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSessionInfo = async () => {
      const sessionInfo = await getCurrentUserInfo();
      setUserInfo(sessionInfo.userInfo);
      setIsLoading(false);
    };

    fetchSessionInfo();
  }, []);

  if (isLoading) {
    // Render loading state if the session information is still being fetched
    return <div>Loading...</div>;
  }

  if (!userInfo) {
    // Render the message if the session doesn't exist
    return (
      <main className="flex justify-center p-24 ">
        <div className="border flex justify-center border-black rounded-xl w-96">
          <div className="p-10 pb-5">
            <div className="font-bold text-2xl mb-5">
              <h1>Unauthorized</h1>
            </div>
            <div className="break-normal"></div>
            <p>
              You have not logged in and cannot view the dashboard.
              <br />
              <Link
                href="/"
                className="underline font-bold hover:text-blue-600 "
              >
                Login to continue.
              </Link>
            </p>
          </div>
        </div>
      </main>
    );
  }

  const formattedCreatedAt = format(
    new Date(userInfo.created_at),
    "yyyy-MM-dd HH:mm:ss"
  );

  return (
    <>
      <main className="flex justify-center p-24 ">
        <div className="border flex justify-center border-black rounded-xl w-96">
          <div className="p-10 pb-5">
            <div className="font-bold text-2xl mb-5">
              <h1>Welcome</h1>
            </div>
            <div className="break-normal"></div>
            <p>
              You successfully signed in with Passage.
              <br />
              Your username is: <b> {userInfo.email}</b>
              <br />
              Account created at:
              <br /> <b> {formattedCreatedAt}</b>
            </p>
            <LogoutButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardContent;
