import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/range';


let sequence:Observable<number>= Observable.range(1, 100)
  .map((item:number) => {
    if(item % 3 === 0 || item % 5 === 0) {
      if(item % 3 === 0 && item % 5 === 0) {
        console.log("FizzBuzz");
      }else if(item % 3 === 0) {
        console.log("Fizz");
      }else {
        console.log("Buzz");
      }
    }else {
      console.log(item);
    }
  });

sequence.subscribe((item:number) => item);