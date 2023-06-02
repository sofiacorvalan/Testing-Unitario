import {esMayorDeEdad} from './MiComponente';

/*Los test deben devolver true o false según correspondan, si es mayor a 18 o tiene 18 devolver true, si tiene menos de 18 devolver false y si se ingresara algún numero negativo devolver null. */

describe ('funciones dentro del componente MiComponente', () => {
    describe('esMayorDeEdad', () => {
        test('es mayor a 18', () => {
            const result = esMayorDeEdad(19)
            expect(result).toBe(true);
        })
        test('es menor a 18', () => {
            const result = esMayorDeEdad(17)
            expect(result).toBe(false);
        })
        test('es negativo', () => {
            const result = esMayorDeEdad(-5)
            expect(result).toBe(null);
        })
    })
})
