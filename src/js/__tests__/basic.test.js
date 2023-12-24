import { Validator, Settings, ArrayBufferConverter, getBuffer, cleanAndFormatPhone } from "../basic";

describe('Validator', () => {
  it('should validate a valid username', () => {
    expect(Validator.validateUsername("user123_name")).toBe(true);
  });

  it('should not validate a username with too many digits', () => {
    expect(Validator.validateUsername("user1234_name")).toBe(false);
  });

  it('should not validate a username starting with a digit', () => {
    expect(Validator.validateUsername("1user_name")).toBe(false);
  });

  it('should not validate a username ending with a special character', () => {
    expect(Validator.validateUsername("user_name!")).toBe(false);
  });

  it('should not validate a username with a sequence of special characters', () => {
    expect(Validator.validateUsername("user__name")).toBe(true);
  });
});

describe('Settings class', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  it('should have correct default settings', () => {
    const correctResult = new Map();
    correctResult.set("theme", "dark");
    correctResult.set("music", "trance");
    correctResult.set("difficulty", "easy");
    expect(settings.defaultSettings).toEqual(correctResult);
  });

  it('should set and get theme setting correctly', () => {
    settings.setSetting('theme', 'light');
    expect(settings.settings.get('theme')).toBe('light');
  });

  it('should set and get music setting correctly', () => {
    settings.setSetting('music', 'rock');
    expect(settings.settings.get('music')).toBe('rock');
  });

  test('should set and get difficulty setting correctly', () => {
    settings.setSetting('difficulty', 'hard');
    expect(settings.settings.get('difficulty')).toBe('hard');
  });

  test('should throw an error for invalid setting name', () => {
    const invalidSetting = "invalidSetting"
    const validValue = "light"
    expect(() => settings.setSetting(invalidSetting, validValue)).toThrow(`Некорректно указан тип параметра ${invalidSetting}, или его значение ${validValue}`);
  });

  test('should throw an error for invalid setting value', () => {
    const validSetting = "theme"
    const invalidValue = "pink"
    expect(() => settings.setSetting(validSetting, invalidValue)).toThrow(`Некорректно указан тип параметра ${validSetting}, или его значение ${invalidValue}`);
  });

});

describe('ArrayBufferConverter', () => {
  test('should correctly convert buffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});

it('cleanAndFormatPhone function', () => {
  expect(cleanAndFormatPhone('8 (927) 000-00-00')).toBe('+79270000000');
  expect(cleanAndFormatPhone('+7 960 000 00 00')).toBe('+79600000000');
  expect(cleanAndFormatPhone('+86 000 000 0000')).toBe('+860000000000');
});
