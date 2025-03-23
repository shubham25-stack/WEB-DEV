function identity<T>(args: T):T{
    return args;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

output1.toUpperCase();