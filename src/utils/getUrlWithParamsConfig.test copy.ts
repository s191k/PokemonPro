import getUrlWithParamsConfig from "./getUrlWithParamsConfig"

describe('getUrlWithParamsConfig', ()=> {

    test(' test method getPokemons() ', ()=>{
        const url = getUrlWithParamsConfig('getPokemons', {})

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {},
        })
    });
    test(' два аргумента - getPolemons + {name: "Pikachu"} ', ()=>{
        const url = getUrlWithParamsConfig('getPokemons', {id: 25})

        expect(url).toEqual({
            protocol: 'http',
            host: 'zar.hosthot.ru',
            pathname: '/api/v1/pokemons',
            query: {id: 25},
        })
    });
});