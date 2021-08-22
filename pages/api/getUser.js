import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { getUserById } from "../../utils/fauna";

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = getSession(req, res);

  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: { message: "HTTP Method not allowed" } });
  }

  const userData = await getUserById(user.sub);
  res.status(200).json({ user: userData.data });
});
