import { Text } from "@chakra-ui/react";

export default function SpecialDayMessages({ day }) {
  const dayInt = parseInt(day);

  const dayMessage = (day) => {
    switch (day) {
      case 1:
        return "A journey of a thousand miles begins with a step. 🏋🥇";
      case 14:
        return "You’re 2 weeks in. Great work! 🥳🎊";
      case 30:
        return "First month done. You are awesome! 💪🚀";
      case 50:
        return "You are halfway there. You didn’t come this far only to come this far. Keep going! 💪🔥";
      case 66:
        return "You have yourself a new habit, statistically speaking. Time to celebrate! 🎊🏅";
      case 90:
        return "Nearly 3 full months of consistent, hard work. You should be proud of your effort!🎉🎉";
      case 99:
        return "Tomorrow is the day. Enjoy the feeling of accomplishment when checking off that last day. Look back at where you started. 🎊🎉";
      case 100:
        return "You made it! Be proud of yourself 🤩🏆";
      default:
        return undefined; // To make dayMessage return false when there is no message
    }
  };

  return (
    <Text
      textAlign="center"
      fontSize="xl"
      fontWeight="thin"
      m={dayMessage(dayInt) ? 2 : 0} // Add margin if there is a given day
    >
      {dayMessage(dayInt)}
    </Text>
  );
}
