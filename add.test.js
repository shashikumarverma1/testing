const { add} = require("./add")

describe("add fn" , ()=>{
    test("addd" , ()=>{
        expect(add(3,8)).toBe(11)
    });
    test("addd" , ()=>{
        expect(add(-3,8)).toBe(5)
    });
    test("addd" , ()=>{
        expect(add(-3,-5)).toBe(-8)
    });
    test("addd" , ()=>{
        expect(add(0,0)).toBe(0)
    });
    test("addd" , ()=>{
        expect(add(7,0)).toBe(7)
    });
    test("addd" , ()=>{
        expect(add(0,40)).toBe(40)
    });
    test("addd" , ()=>{
        expect(add(0,-40)).toBe(-40)
    });
    test("addd" , ()=>{
        expect(add(0,0)).toBe(0)
    });
    test("addd" , ()=>{
        expect(add(0,-0)).toBe(0)
    });
    test("addd" , ()=>{
        expect(add(-0,-0)).toBe(0)
    });
    test("addd" , ()=>{
        expect(add(0,-0)).toBe(0)
    });
    test("addd" , ()=>{
        expect(add(-0,0)).toBe(0)
    });
  
})