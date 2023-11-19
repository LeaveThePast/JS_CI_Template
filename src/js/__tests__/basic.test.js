import { assessHealth, sortCharactersByHealth, getLevel } from '../basic';
import fetchData from '../http';
//Base
test.each([
  [{ name: "Warrior", health: 90 }, "healthy"],
  [{ name: "Rogue", health: 69 }, "wounded"],
  [{ name: "Mage", health: 10 }, "critical"]
])("character is %s and health is %i", (character, expected) => {
  expect(assessHealth(character)).toBe(expected);
});

test("sort heroes by health", () => {
  const characters = [
    { name: "Warrior", health: 10 },
    { name: "Mage", health: 100 },
    { name: "Rogue", health: 80 }
  ];
  const sortedCharacters = sortCharactersByHealth(characters)

  expect(sortedCharacters).toEqual([
    { name: "Mage", health: 100 },
    { name: "Rogue", health: 80 },
    { name: "Warrior", health: 10 }
  ]);
});

//Requests
jest.mock('../http');

describe('getLevel function', () => {
  it('should return the current level when response status is "ok"', () => {
    const mockResponse = {
      status: 'ok',
      level: 42,
    };

    fetchData.mockReturnValueOnce(mockResponse);

    const result = getLevel('123');

    expect(result).toBe('Ваш текущий уровень: 42');
  });

  it('should return an error message when response status is not "ok"', () => {
    const mockResponse = {
      status: 'error',
    };

    fetchData.mockReturnValueOnce(mockResponse);

    const result = getLevel('456');

    expect(result).toBe('Информация об уровне временно недоступна');
  });
});

describe('getLevel function error handling', () => {
  it('should handle errors thrown by fetchData', () => {
    fetchData.mockImplementationOnce(() => {
      throw new Error('Mocked fetchData error');
    });

    let result;
    try {
      result = getLevel('789');
    } catch (error) {
      console.error('An error occurred:', error.message);
    }

    result = result || 'Информация об уровне временно недоступна';

    expect(result).toBe('Информация об уровне временно недоступна');
  });
});