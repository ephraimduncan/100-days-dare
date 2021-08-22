import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { addUserUserGoal } from "../../utils/fauna";

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = getSession(req, res);

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: { message: "HTTP Method not allowed" } });
  }

  const userGoal = await addUserUserGoal(user.sub, req.body);
  return res.status(200).json(userGoal);
});
