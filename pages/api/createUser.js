import { getUserById, createUser } from "../../utils/fauna";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: { message: "HTTP Method not allowed" } });
  }

  // Get User By Id
  try {
    const oldUser = await getUserById(req.body.userId);

    if (oldUser) {
      return res.status(200).json(oldUser);
    }
  } catch (err) {}

  // Add new user to db if non-existent
  const newUser = await createUser(req.body);
  return res.status(200).json(newUser);
}
