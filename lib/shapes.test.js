// ##### I have used ChatGPT for this test because it was way beyond my knowledge and I do not mind getting penalized for the test component of the project. ######

const inquirer = require('inquirer');
const Shapes = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

jest.mock('inquirer');
jest.mock('./circle');
jest.mock('./triangle');
jest.mock('./square');

describe('Shapes', () => {
  describe('run', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call inquirer.prompt and create a Circle object when shape is "circle"', async () => {
      inquirer.prompt.mockResolvedValueOnce({ shape: 'circle' });
      const circleSpy = jest.spyOn(Circle.prototype, 'circle').mockImplementation();

      const shapes = new Shapes();
      await shapes.run();

      expect(inquirer.prompt).toHaveBeenCalledTimes(1);
      expect(circleSpy).toHaveBeenCalledTimes(1);

      circleSpy.mockRestore();
    });

    it('should call inquirer.prompt and create a Triangle object when shape is "triangle"', async () => {
      inquirer.prompt.mockResolvedValueOnce({ shape: 'triangle' });
      const triangleSpy = jest.spyOn(Triangle.prototype, 'triangle').mockImplementation();

      const shapes = new Shapes();
      await shapes.run();

      expect(inquirer.prompt).toHaveBeenCalledTimes(1);
      expect(triangleSpy).toHaveBeenCalledTimes(1);

      triangleSpy.mockRestore();
    });

    it('should call inquirer.prompt and create a Square object when shape is "square"', async () => {
      inquirer.prompt.mockResolvedValueOnce({ shape: 'square' });
      const squareSpy = jest.spyOn(Square.prototype, 'square').mockImplementation();

      const shapes = new Shapes();
      await shapes.run();

      expect(inquirer.prompt).toHaveBeenCalledTimes(1);
      expect(squareSpy).toHaveBeenCalledTimes(1);

      squareSpy.mockRestore();
    });
  });
});
