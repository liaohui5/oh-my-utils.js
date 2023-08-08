import { camelCase, kebabCase, snakeCase } from '../src/cases';

describe('cases', () => {
  it('camelCase', () => {
    let origin = 'ab-cd';
    let target = camelCase(origin);
    expect(target).toBe('abCd');

    origin = 'ab_cd';
    target = camelCase(origin, true);
    expect(target).toBe('AbCd');

    origin = 'ab-cd@ef.gh#jk';
    target = camelCase(origin, true, ['-', '_', '.', '@']);
    expect(target).toBe('AbCdEfGh#jk');

    origin = 'ab---cd___ef';
    target = camelCase(origin, true);
    expect(target).toBe('AbCdEf');

    origin = '---ab---cd___ef___';
    target = camelCase(origin, true);
    expect(target).toBe('AbCdEf');

    // spaces
    origin = 'hello world java script ';
    target = camelCase(origin, true, [' '])
    expect(target).toBe('HelloWorldJavaScript')
  });

  it('snakeCase', () => {
    let origin = 'HelloWorld';
    let target = snakeCase(origin);
    expect(target).toBe('hello_world');
  });

  it('kebabCase', () => {
    let origin = 'HelloWorld';
    let target = kebabCase(origin);
    expect(target).toBe('hello-world');
  });
});
