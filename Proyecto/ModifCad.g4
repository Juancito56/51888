grammar ModifCad;


// Reglas del parser


inicio: programa ;

programa: (declaracion | funcion | operacionTexto)* ;

declaracion: VARIABLE nombre (EQUAL valor)? PUNTOYCOMA; 

funcion: FUNCION nombre (LPAREN argumentos RPAREN)? LLA_ABRE instrucciones LLA_CIERRA ;

argumentos: nombre (COMA nombre)? ;

instrucciones: (operacionTexto | impresion | retorno)* ;

operacionTexto: nombre EQUAL transformacion LPAREN cadena RPAREN PUNTOYCOMA ;

transformacion: MAYUSCULAS | MINUSCULAS | LONGITUD | INVERTIR | REEMPLAZAR ;

impresion: IMPRIMIR valor PUNTOYCOMA ;

retorno: DEVOLVER valor PUNTOYCOMA ;

valor: TEXTO | NUMERO | nombre ;

cadena: TEXTO | nombre ;

nombre: IDENTIFICADOR ;


// Reglas del lexer


// Palabras clave
VARIABLE: 'variable';
FUNCION: 'funcion';
IMPRIMIR: 'imprimir';
DEVOLVER: 'devolver';

MAYUSCULAS: 'mayusculas';
MINUSCULAS: 'minusculas';
LONGITUD: 'longitud';
INVERTIR: 'invertir';
REEMPLAZAR: 'reemplazar';

// Símbolos
EQUAL: '=';
PUNTOYCOMA: ';';
COMA: ',';
LPAREN: '(';
RPAREN: ')';
LLA_ABRE: '{';
LLA_CIERRA: '}';

// Tokens base
IDENTIFICADOR: [a-zA-Z_][a-zA-Z0-9_]*;
NUMERO: [0-9]+;
TEXTO: '"' (~["\r\n])* '"' ;

// Espacios
WS: [ \t\r\n]+ -> skip;
