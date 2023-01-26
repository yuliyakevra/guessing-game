class GuessingGame {
        

    constructor() {}

    setRange(min, max) {
this.start=min;
this.end=max;
    }

    guess() {
this.mid=Math.round((this.start+this.end)/2);
return this.mid
    }

    lower() {
this.end=this.guess();
return this.end;
    }

    greater() {
this.start=this.guess();
return this.start
    }


}

module.exports = GuessingGame;
