const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Sorting with one item should return the same item", () => {
    expect(sorting.sortByName(["Alice"])).toEqual(["Alice"]);
  });

  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  
  it("Sorting with one item should return the same item", () => {
    expect(sorting.sortByName(["Alice", "Alice"])).toEqual(["Alice", "Alice"]);
  });
});
