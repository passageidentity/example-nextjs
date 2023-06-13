"use client";
import { useRouter } from "next/navigation";
import { FC, MouseEventHandler } from "react";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  const router = useRouter();
  const handleLogout: MouseEventHandler<HTMLDivElement> = () => {
    localStorage.clear();
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 2025 00:00:00 GMT;path=/";
    }
    // Redirect to the login page after logout
    router.push("/");
  };

  return (
    <>
      <div
        onClick={handleLogout}
        className="mt-5 bg-red-800 w-fit px-5 py-3 rounded-xl text-neutral-200 cursor-pointer"
      >
        Logout
      </div>
    </>
  );
};

export default LogoutButton;
