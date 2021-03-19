const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
		    test('inicio nao pode ser negativo', () => {
			    expect(gerarNumeroAleatorio(-20, -5))
			    .toBe(-1);
		    });
	    test('inicio não pode ser maior que o fim', () => {
		    expect(gerarNumeroAleatorio(20, 5))
		    .toBe(-1);
	    });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });
});
