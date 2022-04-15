class Complex {
    #real;
    #imaginary;
    constructor(real, imag) {
        this.#real = real;
        this.#imaginary = imag;
    }

    get getReal() {
        return this.#real;
    }

    get getImaginary() {
        return this.#imaginary;
    }

    display() {
        console.log(this.#real, " + i", this.#imaginary);
    }

    add(num) {
        let result = new Complex(this.getReal + num.getReal, this.getImaginary + num.getImaginary);
        return result;
    }
}

let c1 = new Complex(3, 7);
c1.display()
let c2 = new Complex(4, 5);
let res = c1.add(c2);
res.display()

