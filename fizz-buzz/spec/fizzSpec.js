describe("fizzBuzz", function(){
    //function is defined
    it("should exist", function(){
        expect(fizzBuzz).toBeDefined();
    });
    it("should return fizzbuzz",function(){
        let result = fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });
    it("should return fizz", function(){
        let result = fizzBuzz(3);
        expect(result).toBe("Fizz");
    });
    it("should return buzz", function(){
        let result = fizzBuzz(5);
        expect(result).toBe("Buzz");
    });
    it("should return no fizzbuzz", function(){
        let result = fizzBuzz(2);
        expect(result).toBe("No Fizz Buzz");
    });
});