import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('should give as error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*This field is required')
  })

  it('should give as error with less then 3 caracter payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Insufficient length, needs at least 3 characters')
  })

  it('should return true when pass a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*This field is required')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*This field needs to be a e-mail address')
  })

  it('should return true when pass a correct param', () => {
    expect(validateEmptyAndEmail('igor@igor.me')).toBe(true)
  })
})
