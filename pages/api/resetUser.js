import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { addUserDay, resetUserDate } from "../../utils/fauna";

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = getSession(req, res);

  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: { message: "HTTP Method not allowed" } });
  }

  await addUserDay(user.sub, []);
  await resetUserDate(user.sub);
  return res.redirect("/dashboard");
});
