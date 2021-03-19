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

		    test('comprimento invalido', () => {
			    expect(acharCaracter(26, 'abcde', 'c'))
			    .toBe('comprimento invalido');
		    });

		    test('comprimento fornecido diferente do comprimento real', () => {
			    expect(acharCaracter(6, 'abcde', 'c'))
			    .toBe('comprimento fornecido diferente do comprimento real');
		    });

		    test('caracter nao está presente na cadeia', () => {
			    expect(acharCaracter(5, 'abcde', 'f'))
			    .toBe('caracter nao está presente na cadeia');
		    });

			    test('tamanho valido e caracter presente na cadeia', () => {
				    expect(acharCaracter(5, 'abcde', 'c'))
				    .toBe(2);
			    });
    });
});
