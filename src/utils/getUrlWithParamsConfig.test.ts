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
});