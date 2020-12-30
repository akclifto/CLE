const add = (a, b) => a + b;

test('should add two numbers', () => {
    const result = add(3,4);

     if(result !== 7) {
         throw new Error(`Added 4 + 3, result was ${result}. Expected 7`);
     }
});