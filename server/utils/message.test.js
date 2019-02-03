var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    var from = 'Rodrigo';
    var text = 'This is Rodrigo';
    var result = generateMessage(from, text);

    expect(result.from).toBe(from);
    expect(result.text).toBe(text)
    expect(typeof result.createdAt).toBe('number')
  });
});