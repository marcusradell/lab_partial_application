test("Lab 0: Basics", async () => {
  const result = getItem();

  expect(result).toEqual({ name: "Shovel" });
});

test("Lab 1: Factory function", () => {
  const getAllItems = createGetAllItems();

  const result = getAllItems();

  expect(result).toEqual([{ name: "Shovel" }]);
});

test("Lab 2: Async", async () => {
  const fetchAllItems = createFetchAllItems();

  const result = await fetchAllItems();

  expect(result).toEqual([{ name: "Shovel" }]);
});
