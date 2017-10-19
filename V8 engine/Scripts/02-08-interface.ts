module demo_02_08 {
    interface ISquareFunction {
        (x: number): number;
    }

    interface IBook {
        title: string;
        description: string;
        price: number;
    }
    interface IShoppingCart {
        books: IBook[];
        quantity: number;
        addToCart:()=>void;
    }
    interface IShoppingCartScope {
        
    }
    

    //person interface
    interface IPerson {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;

    }

    //var p: IPerson = {
    //    name: 'Dave',
    //    age: 40,
    //    kids: 4,
    //    calcPets: () => p.kids * 4,
    //    makeYounger: (years: number) => p.age -= years,
    //    greet: (msg: string) => msg + ',' + p.name,

    //}
    var p: IPerson =
    {
        name: 'ram',
        age: 56,
        kids: 4,
        calcPets: () => p.kids * 4,
        makeYounger: (years: number) => p.age -= years,
        greet: (msg: string) => msg + ',' + p.name,


}

    console.log(p.name);
    console.log(p.age);
    console.log('pets', p.calcPets());
    p.makeYounger(15);
    console.log(p.age);
    console.log(p.greet("How are you"));

  //  interface ISessionEval {
  //      addRating: (rating: number) => void;
  //      calcRating:()=>number;
  //  }

  //  function sessionEvaluator(): ISessionEval {
  //      var ratings: number[] = [];
  //      var addRating=(rating: number) => {
  //          ratings.push(rating);
  //      }
  //      var calcRating=() => {
  //          var sum: number = 0;
  //          ratings.forEach(value => {
  //              sum += value;
  //          });
  //          return sum;
  //      }
  //      return{
  //          addRating: addRating,
  //          calcRating: calcRating,
  //  };

  //}
    interface ISession {
        addRating: (rating: number) => void;
        calcRating: () =>number;
    }

    function sessionEvaluator(): ISession {
        var ratings: number[] = [];
        var addRating=(rating: number) => {
            ratings.push(rating);
        }
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach((value:number) =>
            {
                sum += value;
            });
            return sum/ratings.length;
        }
        return{
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4.5);
    s.addRating(4.765678);
    console.log(s.calcRating());

}