var selectionSortFunction = require("../selectionsort.js")
describe("A suite", function() {
  
  it("keeps a sorted array sorted", function() {
    expect(selectionSortFunction([1,2])).toEqual([1,2]);
  });

  it("sorts an unsorted list of two", function() {
    expect(selectionSortFunction([2,1])).toEqual([1,2]);
  });

  it("sorts a partially sorted list of three", function() {
    expect(selectionSortFunction([1,3,2])).toEqual([1,2,3]);
  });

  it("sorts a completely unsorted list of three", function() {
    expect(selectionSortFunction([3,2,1])).toEqual([1,2,3]);
  });
  
});
