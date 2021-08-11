const { generateVenueURI } = require("../App");

describe("generateVenueURI", () => {
  test("should return a string", () => {
    const result = generateVenueURI("", "");
    expect(typeof result).toBe("string");
  });
  test("should return an empty string given no arguments", () => {
    const result = generateVenueURI();
    expect(result).toBe("");
  });
  test("given two string args, returns formatted URI containing strings", () => {
    const result = generateVenueURI("bristol", "thekla");
    expect(result).toBe("/bristol-events/thekla");
  });
  test("should strip whitespace from args", () => {
    const result = generateVenueURI(" bristol  ", "  thekla");
    expect(result).toBe("/bristol-events/thekla");
  });
  test("should normalise args to lower case", () => {
    const result = generateVenueURI("BriStOL", "thEklA");
    expect(result).toBe("/bristol-events/thekla");
  });
  test("should replace necessary spaces to dashes", () => {
    const result = generateVenueURI("Weston Super Mare", "The Playhouse");
    expect(result).toBe("/weston-super-mare-events/the-playhouse");
  });
});
