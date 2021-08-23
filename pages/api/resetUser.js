import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { addUserDay } from "../../utils/fauna";

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = getSession(req, res);

  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: { message: "HTTP Method not allowed" } });
  }

  const userDays = await addUserDay(user.sub, []);
  return res.redirect("/dashboard");
});
