import toCapitalizeFirstLetter from "./toCapitalizeFirstLetter"

describe('toCapitalizeFirstLetter', ()=> {

    test('Проверяем ФР И ОР ', ()=>{
        const resultString = toCapitalizeFirstLetter('getPokemons')
        expect(resultString).toEqual('GetPokemons')
    });

    test('Проверяем что нельзя чтобы первый символ был не буквой', ()=>{
        const resultString = toCapitalizeFirstLetter('1getPokemons')
        expect(resultString).toEqual('First char is not letter!!')
    });

    test('Проверяем что можно использовать и русские символы', ()=>{
        const resultString = toCapitalizeFirstLetter('покемоны')
        expect(resultString).toEqual('Покемоны')
    });

});