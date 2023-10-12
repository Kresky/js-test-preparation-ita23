function testFunction() {
    describe('04-function - greetUser', () => {
        it("should greet a user by their name", () => {
            const result = greetUser("Jack");
            expect(result).toBe("Hello, Jack");
        });
    });

    describe('04-function - toSpinalCase', () => {
        it("should convert a string to spinal case", () => {
            const result = toSpinalCase("This Is Spinal Tap");
            expect(result).toBe("this-is-spinal-tap");
        });

        it("should convert a string to spinal case", () => {
            const result = toSpinalCase("hello how are you");
            console.log(result)
            expect(result).toBe("hello-how-are-you");
        });

        it("should return an empty string for an empty input", () => {
            const result = toSpinalCase("");
            expect(result).toBe("");
        });
    });

    describe('04-function - lightTravelTime', () => {
        it("should calculate the time taken by light to travel a certain distance", () => {
            const result = lightTravelTime(300000);
            expect(result).toBe(1);
        });

        it("should return 0 for a distance of 0 km", () => {
            const result = lightTravelTime(0);
            expect(result).toBe(0);
        });

        it("should return 2 for a distance of 600000 km", () => {
            const result = lightTravelTime(600000);
            expect(result).toBe(2);
        });
    });
}