// ##### I have used ChatGPT for this test because it was way beyond my knowledge and I do not mind getting penalized for the test component of the project. ######

const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./square');

jest.mock('inquirer');
jest.mock('fs');

describe('Square', () => {
  describe('square', () => {
    it('should call inquirer.prompt and fs.writeFile with the correct arguments', async () => {
      inquirer.prompt.mockResolvedValueOnce({
        acronym: 'ABC',
        letterColor: '#000000',
        shapeColor: '#FFFFFF',
      });

      const writeFileMock = jest.spyOn(fs, 'writeFile').mockImplementation((path, content, callback) => {
        expect(path).toBe('./examples/logo.svg');
        expect(content).toContain('<square');
        expect(content).toContain('<text');
        callback();
      });

      const square = new Square();
      await square.square();

      expect(inquirer.prompt).toHaveBeenCalledTimes(1);
      expect(writeFileMock).toHaveBeenCalledTimes(1);

      writeFileMock.mockRestore();
    });
  });
});
