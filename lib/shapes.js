const inquirer = require('inquirer');
const Circle = require("./circle.js")
const Triangle = require("./triangle.js")
const Square = require("./square.js")

class Shapes {
    constructor() {
        this.shape = '';
    }
    run() {
        return inquirer
            .prompt ([
                {
                    type: 'list',
                    message: 'Choose the shape of your logo.',
                    choices: ['circle', 'triangle', 'square'],
                    name: 'shape'
                },
            ])
            .then (({ shape }) => {
                this.shape = `${shape}`;
                if (this.shape === "circle") {
                    const circle = new Circle;
                    circle.circle();
                } else if (this.shape === "triangle") {
                    const triangle = new Triangle;
                    triangle.triangle();
                } else if (this.shape === "square") {
                    const square = new Square;
                    square.square();
                }
            })
    }
}

module.exports = Shapes;