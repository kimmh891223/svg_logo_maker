const inquirer = require("inquirer");
const fs = require("fs");

class Square {
    constructor(acronym, letterColor, shapeColor) {
        this.acronym = acronym;
        this.letterColor = letterColor;
        this.shapeColor = shapeColor;
    }
    square() {
        return inquirer
            .prompt ([
                {
                    type: 'input',
                    message: 'Enter the acronym for your brand (maximum of 3 characters).',
                    name: 'acronym',
                    validate: (input) => {
                        if (input.length > 3) {
                            return 'Acronym should not exceed 3 characters.';
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    message: 'Enter the name or hexadecimal number of the color for your letters(include #).',
                    name: 'letterColor'
                },
                {
                    type: 'input',
                    message: 'Enter the name or hexadecimal number of the color for your shape(include #).',
                    name: 'shapeColor'
                }
            ])
            .then((answers) => {
                const svgContent = generateSquare(answers);
                
                fs.writeFile('./examples/logo.svg', svgContent, (err) =>
                err ? console.error(err) : console.log('Success!')
                );
            })
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });

    }
}

const generateSquare = ({acronym, letterColor, shapeColor}) => {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="1"/>
    <text x="115" y="115" stroke="${letterColor}" fill="${letterColor}" font-size="40px">${acronym}</text></svg>`
    
};

module.exports =  Square;