const add = (num1: number,num2: number) => {
    return num1 + num2
}

function printResult(num: number): void{
    console.log('Result is ....' + num);
    
}

printResult(add(10,26))