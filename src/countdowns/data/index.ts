import FakeCountdowns from "./fake-countdowns.json";

export const getCountdowns = async () => {
  return new Promise((resolve, reject) => {
    if (!FakeCountdowns) {
      reject(new Error("Countdowns not found"));
    }

    setTimeout(() => resolve(FakeCountdowns), 1000);
  });
};
