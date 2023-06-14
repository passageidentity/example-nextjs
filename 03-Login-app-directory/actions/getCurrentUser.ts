import Passage from "@passageidentity/passage-node";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const passage = new Passage({
    appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID!,
    apiKey: process.env.NEXT_PUBLIC_PASSAGE_API_KEY!,
    authStrategy: "HEADER",
  });

  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get("psg_auth_token");
    const req = {
      headers: {
        authorization: `Bearer ${authToken?.value}`,
      },
    };
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;
      return {
        props: {
          isAuthorized: true,
          username: identifier,
          appID: passage.appID,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
  return { props: { isAuthorized: false, username: "", appID: passage.appID } };
}
