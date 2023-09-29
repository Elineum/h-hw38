const sequencePromises = (array) => {
  let currentPromise = array[0]();

  for (let i = 1; i < array.length; i++) {
    currentPromise = currentPromise.then(array[i]);
  }

  return currentPromise;
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const tasks = [
  () => delay(1000).then(() => console.log("Завдання 1 виконано")),
  () => delay(2000).then(() => console.log("Завдання 2 виконано")),
  () => delay(1500).then(() => console.log("Завдання 3 виконано")),
  () => delay(1000).then(() => console.log("Завдання 4 виконано")),
  () => delay(2000).then(() => console.log("Завдання 5 виконано")),
  () => delay(1500).then(() => console.log("Завдання 6 виконано")),
  () => delay(1000).then(() => console.log("Завдання 7 виконано")),
  () => delay(2000).then(() => console.log("Завдання 8 виконано")),
  () => delay(1500).then(() => console.log("Завдання 9 виконано")),
];

sequencePromises(tasks)
  .then(() => {
    console.log("Всі завдання завершено");
  })
  .catch((error) => {
    console.error("Помилка:", error);
  });
