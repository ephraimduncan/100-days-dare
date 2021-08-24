import faunadb from "faunadb";
const {
  Create,
  Collection,
  Get,
  Match,
  Index,
  Update,
  Select,
  ToString,
  Now,
} = faunadb.query;

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET,
});

const createUser = async (user) => {
  return await faunaClient.query(
    Create(Collection("users"), {
      data: { ...user, ...{ createdAt: ToString(Now()) } },
    })
  );
};

const addUserUserGoal = async (userId, data) => {
  return await faunaClient.query(
    Update(Select(["ref"], Get(Match(Index("user_by_id"), userId))), {
      data: { goal: data.goal, dailyHabit: data.dailyHabit },
    })
  );
};
const addUserDay = async (userId, data) => {
  return await faunaClient.query(
    Update(Select(["ref"], Get(Match(Index("user_by_id"), userId))), {
      data: { days: data },
    })
  );
};

const resetUserDate = async (userId) => {
  return await faunaClient.query(
    Update(Select(["ref"], Get(Match(Index("user_by_id"), userId))), {
      data: { createdAt: ToString(Now()) },
    })
  );
};

const getUserById = async (userId) => {
  return await faunaClient.query(
    Get(Match(Index("user_by_id"), userId))
  );
};

export {
  getUserById,
  createUser,
  addUserUserGoal,
  addUserDay,
  resetUserDate,
};
