import { openDB } from "idb";

const dbPromise = openDB("authDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { keyPath: "username" });
    }
    if (!db.objectStoreNames.contains("metrics")) {
      const metricsStore = db.createObjectStore("metrics", {
        keyPath: "id",
        autoIncrement: true,
      });
      metricsStore.createIndex("username", "username", { unique: false });
    }
    if (!db.objectStoreNames.contains("config")) {
      db.createObjectStore("config", { keyPath: "key" }); // Store dummy data flag
    }
  },
});

// Save user credentials
export const saveUser = async (username, password) => {
  const db = await dbPromise;
  await db.put("users", { username, password });
};

// Retrieve user credentials
export const getUser = async (username) => {
  const db = await dbPromise;
  return db.get("users", username);
};

// Save user-specific metrics
export const saveUserMetrics = async (username, metrics) => {
  const db = await dbPromise;
  const tx = db.transaction("metrics", "readwrite");
  const store = tx.objectStore("metrics");

  // Convert string inputs to numbers
  const numericMetrics = {
    ...metrics,
    age: metrics.age ? Number(metrics.age) : null,
    height_cm: metrics.height_cm ? Number(metrics.height_cm) : null,
    weight_kg: metrics.weight_kg ? Number(metrics.weight_kg) : null,
    body_fat_percentage: metrics.body_fat_percentage
      ? Number(metrics.body_fat_percentage)
      : null,
  };

  // Remove the 'id' if it exists to allow auto-increment
  const metricsToSave = { ...numericMetrics };
  delete metricsToSave.id;

  // Ensure each entry is stored separately with a timestamp
  await store.add({
    username,
    ...metricsToSave,
    timestamp: new Date().toISOString(), // Unique timestamp for each entry
  });

  await tx.done;
};

// Retrieve only the logged-in user's metrics
export const getUserMetrics = async (username) => {
  const db = await dbPromise;
  const allMetrics = await db.getAllFromIndex("metrics", "username", username);
  return allMetrics.length > 0 ? allMetrics[allMetrics.length - 1] : null;
};

export const checkDummyDataCreated = async () => {
  const db = await dbPromise;
  return await db.get("config", "dummyDataCreated");
};

export const setDummyDataCreated = async () => {
  const db = await dbPromise;
  await db.put("config", { key: "dummyDataCreated", value: true });
};

// Retrieve full weight history for a user
export const getUserWeightHistory = async (username) => {
  const db = await dbPromise;
  const tx = db.transaction("metrics", "readonly");
  const store = tx.objectStore("metrics");
  const index = store.index("username");
  const history = await index.getAll(username);

  if (!history.length) {
    console.warn(`No weight history found for ${username}`);
    return [];
  }

  return history
    .map((entry) => ({
      date: entry.timestamp,
      weight: Number(entry.weight_kg || 0),
      height_cm: Number(entry.height_cm || 0),
      height_m: Number(entry.height_cm || 0) / 100, // Convert height to meters
      body_fat_percentage: Number(entry.body_fat_percentage || 0),
      gender: entry.gender || "Unspecified",
      age: Number(entry.age || 0),
      primary_goal: entry.primary_goal || "Not specified",
      bmi:
        entry.weight_kg && entry.height_cm
          ? +(
              Number(entry.weight_kg) /
              (Number(entry.height_cm) / 100) ** 2
            ).toFixed(2)
          : 0,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
};
