var expect = chai.expect;

describe("Piano", function() {
    
    describe("#Puntuacion", function() {
        it("Debería incrementarse", function() {
            var t = puntuacion("c1");
            expect(t).to.equal(1);
        });
    
    });
   
   describe("#newRound", function() {
        it("Deberia setear los intervalos", function() {
            var cumple = ['c1','c1','d1','c1','f1','e1','c1','c1','d1','c1','g1','f1']; 
            var interval = animate(cumple);
            expect(interval).to.equal(2);
        });
    
    });
 
});