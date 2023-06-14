import { Passage } from "@passageidentity/passage-js";

export interface PassageUserInfo {
  email: string;
  created_at: string;
}

export async function getSessionInfo() {
  const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  try {
    const user = passage.getCurrentUser();
    const userInfo = await user.userInfo();
    console.log(userInfo);
    return {
      userInfo,
    };
  } catch (error) {
    console.log(error);
  }
  return { userInfo: undefined };
}
