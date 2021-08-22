import faunadb from "faunadb";
const { Create, Collection, Get, Match, Index } = faunadb.query;

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET,
});

const createUser = async (user) => {
  return await faunaClient.query(
    Create(Collection("users"), {
      data: user,
    })
  );
};

const getUserById = async (userId) => {
  return await faunaClient.query(
    Get(Match(Index("user_by_id"), userId))
  );
};

export { getUserById, createUser };
