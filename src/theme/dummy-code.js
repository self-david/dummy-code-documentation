/* eslint-disable no-undef */

Prism.languages.dummy = Prism.languages.extend('clike', {
  'control': [
    {
    pattern: /(?:terminar|continuar|hacer|mientras|si|osi|sino|para|regresar|retornar|ret|elegir|caso|predeterminado)\b/,
    lookbehind: true
  },
  ],
  'declaration': [
    {
      pattern: /(?:const|var|global|funcion)\b/,
      lookbehind: true
    }
  ],
  'property': [
    {
      pattern: /(?:eliminar|crear|en)\b/,
      lookbehind: true
    }
  ],
  'type': [
    {
      pattern: /(?:Numero|Texto|Logico|Lista|Objecto)\b/,
      lookbehind: true,
    }
  ],
  'operators': [
    {
      pattern: /(?:^|\s)(!|\|\||o|&&|y|%|=|>|<|==|<=|>=|!=|\+|-|\*|\/)(?:\s|$)/,
      lookbehind: true,
    }
  ],
  'constants': [
    {
      pattern: /(?:cierto|verdadero|falso|nulo|indefinido|Infinito|NuN|ambienteGlobal)\b/,
      lookbehind: true,
    }
  ],
  'functions': [
    {
      pattern: /(?:Mate|leer|imprimir|escribir)\b/,
      lookbehind: true,
    }
  ],
  'symbols': [
    {
      pattern: /(?:=>|\.|:|,)\b/,
      lookbehind: true,
    }
  ],
  'delimiter': [
    {
      pattern: /(?:\[|\]|\{|\}|\(|\))\b/,
      lookbehind: true,
    }
  ],
	'number': {
		pattern: RegExp(
			`${/(^|[^\w$])/.source
			}(?:${
				// constant
				/NeN|Infinito/.source
				}|${ 
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source
				}|${
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source
				}|${ 
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source
				}|${
				// decimal bigint
				/\d+(?:_\d+)*n/.source
				}|${
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			})${
			/(?![\w$])/.source}`
		),
		lookbehind: true
	},
});


Prism.languages.dmm = Prism.languages.dummy;
