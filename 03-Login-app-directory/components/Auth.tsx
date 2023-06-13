"use client";
import { FC, useEffect } from "react";

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);
  return (
    <>
      <passage-auth app-id={process.env.NEXT_PUBLIC_PASSAGE_APP_ID}></passage-auth>
    </>
  );
};

export default Auth;
