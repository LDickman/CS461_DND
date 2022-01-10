const chai = window.chai;
const expect = chai.expect;

describe("Verifying that strings are actual web app links and the links are available", () => {
  it("returns True when https: is in the link", () => {
    expect(isValidUrl("https://www.dnd5eapi.co/api/classes/bard")).to.be.true;
    expect(isValidUrl("https://www.dnd5eapi.co/api/classes/monk")).to.be.true;
    expect(isValidUrl("https://www.dnd5eapi.co/api/races/human")).to.be.true;
    expect(isValidUrl("https://www.dnd5eapi.co/api/races/elf")).to.be.true;
  });
  it("returns False when link does not have https:", () => {
    expect(isValidUrl("dnd5eapi.co/api/equipment/all-armor")).to.be.false;
  });
  it("returns True if the url exists", () => {
    expect(ifUrlExist("https://www.dnd5eapi.co/api/classes/bard")).to.be.true;
    expect(ifUrlExist("https://www.dnd5eapi.co/api/classes/monk")).to.be.true;
    expect(ifUrlExist("https://www.dnd5eapi.co/api/races/human")).to.be.true;
    expect(ifUrlExist("https://www.dnd5eapi.co/api/races/elf")).to.be.true;
  });
  it("returns False when the 404 Error occurs", () => {
    expect(ifUrlExist("https://www.dnd5eapi.co/api/equipment/all-armor")).to.be.false;
  });
});

// EX: rolls: 1, 3, 4   Ability score is 8
describe("Fucntions within the ability Score tab: rollsForScore, and calcForAbilityScoreModifier", () => {
  it("rollOneDice: randomly rolls a number", () => {
    expect(isValidUrl("https://www.dnd5eapi.co/api/classes/bard")).to.be.true;
    expect(isValidUrl("https://www.dnd5eapi.co/api/classes/monk")).to.be.true;
    expect(isValidUrl("https://www.dnd5eapi.co/api/races/human")).to.be.true;
    expect(isValidUrl("https://www.dnd5eapi.co/api/races/elf")).to.be.true;
  });
  it("rollsForScore: adds three scores together", () => {
    expect(rollsForScore([1, 3, 4])).to.deep.equal(8);
    expect(rollsForScore([6, 5, 4])).to.deep.equal(15);
    expect(rollsForScore([4, 3, 4])).to.deep.equal(11);
    expect(rollsForScore([1, 1, 1])).to.deep.equal(3);
  });
  it("calcForAbilityScoreModifier: with modifier of 0 should result in a certain number", () => {
    expect(calcForAbilityScoreModifier(0, 3)).to.deep.equal(-4);
    expect(calcForAbilityScoreModifier(0, 4)).to.deep.equal(-3);
    expect(calcForAbilityScoreModifier(0, 7)).to.deep.equal(-2);
    expect(calcForAbilityScoreModifier(0, 9)).to.deep.equal(-1);
    expect(calcForAbilityScoreModifier(0, 10)).to.deep.equal(0);
    expect(calcForAbilityScoreModifier(0, 13)).to.deep.equal(1);
    expect(calcForAbilityScoreModifier(0, 14)).to.deep.equal(2);
    expect(calcForAbilityScoreModifier(0, 16)).to.deep.equal(3);
    expect(calcForAbilityScoreModifier(0, 18)).to.deep.equal(4);
  });
  it("calcForAbilityScoreModifier: with modifier of greater than 0 should result in a certain number", () => {
    expect(calcForAbilityScoreModifier(2, 3)).to.deep.equal(-2);
    expect(calcForAbilityScoreModifier(1, 4)).to.deep.equal(-2);
    expect(calcForAbilityScoreModifier(1, 7)).to.deep.equal(-1);
    expect(calcForAbilityScoreModifier(2, 9)).to.deep.equal(1);
    expect(calcForAbilityScoreModifier(1, 10)).to.deep.equal(1);
    expect(calcForAbilityScoreModifier(2, 13)).to.deep.equal(3);
    expect(calcForAbilityScoreModifier(1, 14)).to.deep.equal(3);
    expect(calcForAbilityScoreModifier(2, 16)).to.deep.equal(5);
    expect(calcForAbilityScoreModifier(1, 18)).to.deep.equal(5);
  });
});
