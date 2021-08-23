export default function dayDifference(oldDate, newDate) {
  return Math.ceil(
    Math.abs(
      new Date(new Date(newDate).toLocaleDateString()) -
        new Date(new Date(oldDate).toLocaleDateString())
    ) /
      (1000 * 60 * 60 * 24)
  );
}
