const Shape = require('./shape.js')

class Circle extends Shape{
    constructor(color){
        super(color);
    }
}
Circle.prototype.render = function(){
    return `<circle cx='150px' cy='100px' r='75' fill='${this.color}' />`
}
module.exports = Circle;