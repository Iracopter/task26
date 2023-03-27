function Accumulator(number){
    this.number=number;
}

Accumulator.prototype.increment= function(){
    console.log(this.number+1);
    this.number++;
}

Accumulator.prototype.decrement= function(){
    console.log(this.number-1);
    this.number--;
}


function CancelableAccumulator(number){
    Accumulator.call(number);
    this.number=number;

    this.clear=function(){
        console.log(number)
    }
}

//CancelableAccumulator.prototype.clear=function(){
   // console.log(this.number);
//}

CancelableAccumulator.prototype= Object.create(Accumulator.prototype);


const accumulator= new Accumulator(5);

let cancelableAccumulator= new CancelableAccumulator(112);
cancelableAccumulator.clear();

console.log(accumulator.number);
accumulator.increment();
accumulator.increment();
accumulator.increment();
accumulator.decrement();
cancelableAccumulator.clear();
cancelableAccumulator.increment();
cancelableAccumulator.increment();
cancelableAccumulator.increment();
cancelableAccumulator.clear();