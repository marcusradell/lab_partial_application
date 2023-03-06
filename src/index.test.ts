test("Lab 1", async () => {
  const getAllItems = createGetAllItems();

  const result = await getAllItems();

  expect(result).toEqual([{ name: "Shovel" }]);
});
