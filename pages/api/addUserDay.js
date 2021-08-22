import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { addUserDay, getUserById } from "../../utils/fauna";

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = getSession(req, res);

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: { message: "HTTP Method not allowed" } });
  }

  const previousUserData = await getUserById(user.sub);
  const previousArray = await previousUserData.data.days;
  const newArray = [...previousArray];
  newArray.push(req.body);

  console.log(newArray);

  const userDays = await addUserDay(user.sub, newArray);

  return res.status(200).json(userDays);
});
