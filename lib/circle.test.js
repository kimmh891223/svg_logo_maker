// ##### I have used ChatGPT for this test because it was way beyond my knowledge and I do not mind getting penalized for the test component of the project. ######

const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./circle');

jest.mock('inquirer');
jest.mock('fs');

describe('Circle', () => {
  describe('circle', () => {
    it('should call inquirer.prompt and fs.writeFile with the correct arguments', async () => {
      inquirer.prompt.mockResolvedValueOnce({
        acronym: 'ABC',
        letterColor: '#000000',
        shapeColor: '#FFFFFF',
      });

      const writeFileMock = jest.spyOn(fs, 'writeFile').mockImplementation((path, content, callback) => {
        expect(path).toBe('./examples/logo.svg');
        expect(content).toContain('<circle');
        expect(content).toContain('<text');
        callback();
      });

      const circle = new Circle();
      await circle.circle();

      expect(inquirer.prompt).toHaveBeenCalledTimes(1);
      expect(writeFileMock).toHaveBeenCalledTimes(1);

      writeFileMock.mockRestore();
    });
  });
});
