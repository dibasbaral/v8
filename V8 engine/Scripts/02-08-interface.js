var demo_02_08;
(function (demo_02_08) {
    //var p: IPerson = {
    //    name: 'Dave',
    //    age: 40,
    //    kids: 4,
    //    calcPets: () => p.kids * 4,
    //    makeYounger: (years: number) => p.age -= years,
    //    greet: (msg: string) => msg + ',' + p.name,
    //}
    var p = {
        name: 'ram',
        age: 56,
        kids: 4,
        calcPets: function () { return p.kids * 4; },
        makeYounger: function (years) { return p.age -= years; },
        greet: function (msg) { return msg + ',' + p.name; },
    };
    console.log(p.name);
    console.log(p.age);
    console.log('pets', p.calcPets());
    p.makeYounger(15);
    console.log(p.age);
    console.log(p.greet("How are you"));
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (value) {
                sum += value;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4.5);
    s.addRating(4.765678);
    console.log(s.calcRating());
})(demo_02_08 || (demo_02_08 = {}));
//# sourceMappingURL=02-08-interface.js.map