import { bigNumberADD } from "../src/common/big-number-add";



test('adds  + 12 to equal 24 ', () => {
    expect(bigNumberADD("12", "12")).toEqual("24")
})

test('adds 9007199254740991 + 1234567899999999999 to equal "1243575099254740990" ', () => {
    expect(bigNumberADD("9007199254740991", "1234567899999999999")).toEqual("1243575099254740990")
})


test('adds 1 + 9999 to equal "10000" ', () => {
    expect(bigNumberADD("1", "9999")).toEqual("10000")
})


