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

  function updateObjects(objects) {
    return objects.map((object) => {
      Object.keys(object).forEach((property) => {
        object[property] = req.body[property] || object[property];
      });

      return object;
    });
  }

  // I don't know how this filtering works.
  // I spent about 10 hours here moving around things till it worked.
  // Just left it as it is.
  // Happiest day of my life.
  // IT WORKS!!!!!

  const newUniqueArray = [
    ...new Map(
      updateObjects(newArray).map((o) => [JSON.stringify(o), o])
    ).values(),
  ];

  const userDays = await addUserDay(user.sub, newUniqueArray);
  return res.status(200).json(userDays);
});
