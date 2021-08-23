function transformObjectToParams(object) {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          String(value)
        )}`
    );

  return params.length > 0 ? `?${params.join("&")}` : "";
}

export default function createTwitterLink({ url, day, taskToday }) {
  return (
    "https://twitter.com/intent/tweet" +
    transformObjectToParams({
      url,
      text: `Day ${day} - ${taskToday} \nTracking my 100 Days Challege with @100DaysChallenge \n#100DaysChallenge \n`,
    })
  );
}

// console.log(
//   createTwitterLink({
//     url: "localhost:3000",
//     day: 18,
//     taskToday: "twitter",
//   })
// );
