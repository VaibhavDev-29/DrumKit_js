Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

// function()

function sayhello(){
    console.log("hello!");
}


sayhello()
sayhello.describe();


// console.dir(Function.prototype);
