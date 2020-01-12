describe("whatCanIDrink", function(){

    describe("Age Check", function(){
        // Check the function exists
        it("should exist", function(){
            expect(whatCanIDrink).toBeDefined();
        });    
        //Check each IF statement
        it("should return - Drink Toddy", function(){
            let drink = whatCanIDrink(13);
            expect(drink).toBe("Drink Toddy");
        });

        it("should return - Drink Coke", function(){
            let drink = whatCanIDrink(14);
            expect(drink).toBe("Drink Coke");
        });

        it("should return - Drink Beer", function(){
            let drink = whatCanIDrink(18);                 
            expect(drink).toBe("Drink Beer");
         });

        it("should return - Drink Whiskey", function(){
            let drink = whatCanIDrink(21);
            expect(drink).toBe("Drink Whiskey");
        });
        
        it("should return - Incorrect Age < 0", function(){
            let drink = whatCanIDrink(-1);
            expect(drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return - Incorrect Age > 130", function(){
            let drink = whatCanIDrink(131);
            expect(drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });

});