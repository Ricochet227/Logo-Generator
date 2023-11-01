const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require('fs')

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle'); 

inquirer
  .prompt([

    {
        type: 'maxlength-input',
        message: 'Characters for logo (up to three characters):',
        name: 'text',
        maxLength: 3,
      },
      {
        type: 'input',
        message: 'Text color (keyword or hexadecimal format):',
        name: 'textColor',
      },
      {
        type: 'list',
        message: 'Select the desired shape for the logo:',
        choices: [new inquirer.Separator(), "Circle", "Triangle", "Square"],
        name: 'shape',
      },
      {
        type: 'input',
        message: 'Shape color (keyword or hexadecimal format):',
        name: 'shapeColor',
      },
  ])
  .then((answers) => {

    var text = answers.text;
    var textColor = answers.textColor;
    var shape = answers.shape;
    var shapeColor = answers.shapeColor;

    switch(shape){
    case "Circle":
        var shapeObj = new Circle()
        shapeObj.setColor(shapeColor);
        var textHeight = "100px";
        break;
    case "Triangle":
        var shapeObj = new Triangle()
        shapeObj.setColor(shapeColor);
        var textHeight = "125px";
        break;
    case "Square":
        var shapeObj = new Square()
        shapeObj.setColor(shapeColor);
        var textHeight = "100px";
        break;
    }

var svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeObj.render()}
  <text x="150px" y="${textHeight}" text-anchor="middle" dy="0.3em" style="font-size: 50px" fill="${textColor}">${text}</text>
  </svg>
`;

    fs.writeFile('./logo.svg', svgContent, err => {
        if (err) {
        console.error(err);
        } else {
            console.log('Congrats! Your logo has been created in the logo.svg file! (creating another logo will erase the previous one!)');
        }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });