function isValidUrl(_string) {
    let url_string; 
    try {
      url_string = new URL(_string);
    } catch (_) {
      return false;  
    }
    return url_string.protocol === "http:" || url_string.protocol === "https:" ;
  }

// describe("A test", () => {
//   test("should be true", () => {
//     expect(true).toEqual(true);
//   });
// });

// describe("Verifying that API feching is true", () => {
//   it("returns Error when API link is invalid", () => {
//     expect(isValidUrl(), true).toThrow("empty and no initial");
//   });
  
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