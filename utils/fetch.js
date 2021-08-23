export default async function fetch(...args) {
  const res = await fetch(...args);
  return res.json();
}
