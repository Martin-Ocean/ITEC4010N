import { openDB } from "idb";
import { checkDummyDataCreated, setDummyDataCreated } from "./indexedDB";

const dummyUsers = [
  { username: "test1", password: "test1" },
  // { username: "john_doe", password: "password123" },
  // { username: "jane_smith", password: "securepass" },
  { username: "alex_brown", password: "testpassword" },
];

const generateUserMetrics = (username) => {
  const now = new Date();
  const baseAge = Math.floor(Math.random() * 10) + 25; // Random age 25-35
  const gender = Math.random() > 0.5 ? "male" : "female";
  const height_cm = Math.floor(Math.random() * 30) + 160; // Height between 160-190cm

  const entries = [];
  let weight_kg = Math.floor(Math.random() * 30) + 60; // Initial weight between 60-90kg
  let body_fat_percentage = Math.floor(Math.random() * 15) + 10; // Initial body fat 10-25%

  for (let i = 0; i < 5; i++) {
    const monthsAgo = Math.floor(Math.random() * 12) + 1; // Random past 1-12 months
    const pastDate = new Date(now);
    pastDate.setMonth(now.getMonth() - monthsAgo);

    weight_kg += Math.floor(Math.random() * 4) - 2; // Small weight fluctuations (-2 to +2 kg)
    body_fat_percentage += Math.floor(Math.random() * 3) - 1; // Small body fat fluctuations (-1% to +2%)

    entries.push({
      username,
      age: baseAge,
      gender,
      height_cm,
      weight_kg: Math.max(weight_kg, 50), // Prevent unrealistically low values
      body_fat_percentage: Math.max(body_fat_percentage, 5),
      primary_goal: ["fat_loss", "muscle_gain", "general_fitness"][
        Math.floor(Math.random() * 3)
      ],
      timestamp: pastDate.toISOString(),
    });
  }
  return entries;
};

const seedDatabase = async () => {
  const alreadyCreated = await checkDummyDataCreated();
  if (alreadyCreated) {
    console.log("Dummy data already exists. Skipping seeding.");
    return;
  }

  const db = await openDB("authDB", 1);

  // Insert users
  const userTx = db.transaction("users", "readwrite");
  const userStore = userTx.objectStore("users");
  for (const user of dummyUsers) {
    await userStore.put(user);
  }
  await userTx.done;

  // Insert multiple historical weight entries per user
  const metricTx = db.transaction("metrics", "readwrite");
  const metricStore = metricTx.objectStore("metrics");
  for (const user of dummyUsers) {
    const userMetrics = generateUserMetrics(user.username);
    for (const entry of userMetrics) {
      await metricStore.put(entry);
    }
  }
  await metricTx.done;

  // Mark dummy data as created
  await setDummyDataCreated();

  console.log("Dummy data inserted into IndexedDB!");
};

// Export function to trigger manually if needed
export { seedDatabase };
