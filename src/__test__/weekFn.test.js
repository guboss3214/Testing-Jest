import { weekFn } from '../weekFn';

describe('Checking the week number', function(){
    test('Should return correct day of the week', function(){
        expect(weekFn(1)).toBe('Понеділок');
        expect(weekFn(2)).toBe('Вівторок');
        expect(weekFn(3)).toBe('Середа');
        expect(weekFn(4)).toBe('Четвер');
        expect(weekFn(5)).toBe('П\'ятниця');
        expect(weekFn(6)).toBe('Субота');
        expect(weekFn(7)).toBe('Неділя');
        expect(weekFn(8)).toBe(null);
        expect(weekFn('2')).toBe(null);
        expect(weekFn(undefined)).toBe(null);
        expect(weekFn(null)).toBe(null);
    });
});
