const chai = window.chai;
const expect = chai.expect;

describe("isValidUrl: Verifying that API feching is true", () => {
  it("returns True when API link is valid", () => {
    expect()
    expect(isValidUrl('https://www.dnd5eapi.co/api/classes/bard'), true).toEqual(true);
    expect(isValidUrl('https://www.dnd5eapi.co/api/classes/monk'), true).toEqual(true);
    expect(isValidUrl('https://www.dnd5eapi.co/api/races/human'), true).toEqual(true);
    expect(isValidUrl('https://www.dnd5eapi.co/api/races/elf'), true).toEqual(true);
  });
  it("returns False when API link is invalid", () => {
    expect(isValidUrl('https://www.dnd5eapi.co/api/equipment/all-armor'), false).toEqual(false);
  });
});


//   it("Array of one element, that returns that elemnt", () => {
//     expect(myReduce([10], (x,y) => x+y)).toEqual(10);
//   });

//   it("Array of one element, uses multiplcation and has no initial value, that returns that element", () => {
//     expect(myReduce([2.0], (x,y) => x*y)).toEqual(2.0);
//   });

//   it("Array of numbers, uses addition and has no initial value", () => {
//     expect(myReduce([1, 2, 3], (x,y) => x+y)).toEqual(6);
//   });

//   it("Array of numbers, uses addition and has initial value of 5", () => {
//     expect(myReduce([1, 2, 3], (x,y) => x+y, 5)).toEqual(11);
//   });

//   it("Array of strings, ussing addition and has no initial value", () => {
//     expect(myReduce(["b", "a", "n", "d"], (x,y) => x+y)).toEqual("band");
//   });

//   it("Array of strings, ussing addition and has initial value of s", () => {
//     expect(myReduce(["e", "a", "t"], (x,y) => x+y), "s").toEqual("s eat");
//   });
// });

// describe("addItems", () => {
//   ///I tried to do something similar to the DOW Assignment with Calcudu)
//   it("addItems updates the class itemList", () => {
//     beforeEach(() => {
//       addItems(["d", "e", "f"], document.querySelector("#listContainer"));
//     });
//     const options = addItems(["d", "e", "f"], document.querySelector("#listContainer"));
//     expect(options[0].classList.contains(".itemList")).toBe(true);
//     expect(options[1].classList.contains(".itemList")).toBe(true);
//     expect(options[2].classList.contains(".itemList")).toBe(true);
//     // const options = addItems(["d", "e", "f"], document.querySelector("#listContainer"));
//     // expect(options.children().length).toBe(3);
//     // expect(options.children.length).toBe(list.children().length);
//     //addItems(["d", "e", "f"], document.querySelector("#listContainer")).toBeInTheDocument();
//   });
// });