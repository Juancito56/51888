// Generated from c:/Users/Juan Ignacio/GIT/51888/Proyecto/ModifCad.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ModifCadListener from './ModifCadListener.js';
import ModifCadVisitor from './ModifCadVisitor.js';

const serializedATN = [4,1,20,99,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,
0,1,0,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,2,1,2,1,2,1,2,3,2,41,8,2,
1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,51,8,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,
4,60,8,4,1,5,1,5,1,5,5,5,65,8,5,10,5,12,5,68,9,5,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,91,8,
10,1,11,1,11,3,11,95,8,11,1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,
20,22,24,0,1,1,0,5,9,97,0,26,1,0,0,0,2,33,1,0,0,0,4,36,1,0,0,0,6,44,1,0,
0,0,8,56,1,0,0,0,10,66,1,0,0,0,12,69,1,0,0,0,14,77,1,0,0,0,16,79,1,0,0,0,
18,83,1,0,0,0,20,90,1,0,0,0,22,94,1,0,0,0,24,96,1,0,0,0,26,27,3,2,1,0,27,
1,1,0,0,0,28,32,3,4,2,0,29,32,3,6,3,0,30,32,3,12,6,0,31,28,1,0,0,0,31,29,
1,0,0,0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,3,1,0,
0,0,35,33,1,0,0,0,36,37,5,1,0,0,37,40,3,24,12,0,38,39,5,10,0,0,39,41,3,20,
10,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,11,0,0,43,5,1,0,0,
0,44,45,5,2,0,0,45,50,3,24,12,0,46,47,5,13,0,0,47,48,3,8,4,0,48,49,5,14,
0,0,49,51,1,0,0,0,50,46,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,5,15,0,
0,53,54,3,10,5,0,54,55,5,16,0,0,55,7,1,0,0,0,56,59,3,24,12,0,57,58,5,12,
0,0,58,60,3,24,12,0,59,57,1,0,0,0,59,60,1,0,0,0,60,9,1,0,0,0,61,65,3,12,
6,0,62,65,3,16,8,0,63,65,3,18,9,0,64,61,1,0,0,0,64,62,1,0,0,0,64,63,1,0,
0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,11,1,0,0,0,68,66,1,0,0,
0,69,70,3,24,12,0,70,71,5,10,0,0,71,72,3,14,7,0,72,73,5,13,0,0,73,74,3,22,
11,0,74,75,5,14,0,0,75,76,5,11,0,0,76,13,1,0,0,0,77,78,7,0,0,0,78,15,1,0,
0,0,79,80,5,3,0,0,80,81,3,20,10,0,81,82,5,11,0,0,82,17,1,0,0,0,83,84,5,4,
0,0,84,85,3,20,10,0,85,86,5,11,0,0,86,19,1,0,0,0,87,91,5,19,0,0,88,91,5,
18,0,0,89,91,3,24,12,0,90,87,1,0,0,0,90,88,1,0,0,0,90,89,1,0,0,0,91,21,1,
0,0,0,92,95,5,19,0,0,93,95,3,24,12,0,94,92,1,0,0,0,94,93,1,0,0,0,95,23,1,
0,0,0,96,97,5,17,0,0,97,25,1,0,0,0,9,31,33,40,50,59,64,66,90,94];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ModifCadParser extends antlr4.Parser {

    static grammarFileName = "ModifCad.g4";
    static literalNames = [ null, "'variable'", "'funcion'", "'imprimir'", 
                            "'devolver'", "'mayusculas'", "'minusculas'", 
                            "'longitud'", "'invertir'", "'reemplazar'", 
                            "'='", "';'", "','", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "VARIABLE", "FUNCION", "IMPRIMIR", "DEVOLVER", 
                             "MAYUSCULAS", "MINUSCULAS", "LONGITUD", "INVERTIR", 
                             "REEMPLAZAR", "EQUAL", "PUNTOYCOMA", "COMA", 
                             "LPAREN", "RPAREN", "LLA_ABRE", "LLA_CIERRA", 
                             "IDENTIFICADOR", "NUMERO", "TEXTO", "WS" ];
    static ruleNames = [ "inicio", "programa", "declaracion", "funcion", 
                         "argumentos", "instrucciones", "operacionTexto", 
                         "transformacion", "impresion", "retorno", "valor", 
                         "cadena", "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ModifCadParser.ruleNames;
        this.literalNames = ModifCadParser.literalNames;
        this.symbolicNames = ModifCadParser.symbolicNames;
    }



	inicio() {
	    let localctx = new InicioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ModifCadParser.RULE_inicio);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.programa();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ModifCadParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131078) !== 0)) {
	            this.state = 31;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 28;
	                this.declaracion();
	                break;
	            case 2:
	                this.state = 29;
	                this.funcion();
	                break;
	            case 17:
	                this.state = 30;
	                this.operacionTexto();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ModifCadParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(ModifCadParser.VARIABLE);
	        this.state = 37;
	        this.nombre();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 38;
	            this.match(ModifCadParser.EQUAL);
	            this.state = 39;
	            this.valor();
	        }

	        this.state = 42;
	        this.match(ModifCadParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ModifCadParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(ModifCadParser.FUNCION);
	        this.state = 45;
	        this.nombre();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 46;
	            this.match(ModifCadParser.LPAREN);
	            this.state = 47;
	            this.argumentos();
	            this.state = 48;
	            this.match(ModifCadParser.RPAREN);
	        }

	        this.state = 52;
	        this.match(ModifCadParser.LLA_ABRE);
	        this.state = 53;
	        this.instrucciones();
	        this.state = 54;
	        this.match(ModifCadParser.LLA_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ModifCadParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.nombre();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 57;
	            this.match(ModifCadParser.COMA);
	            this.state = 58;
	            this.nombre();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ModifCadParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131096) !== 0)) {
	            this.state = 64;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	                this.state = 61;
	                this.operacionTexto();
	                break;
	            case 3:
	                this.state = 62;
	                this.impresion();
	                break;
	            case 4:
	                this.state = 63;
	                this.retorno();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacionTexto() {
	    let localctx = new OperacionTextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ModifCadParser.RULE_operacionTexto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.nombre();
	        this.state = 70;
	        this.match(ModifCadParser.EQUAL);
	        this.state = 71;
	        this.transformacion();
	        this.state = 72;
	        this.match(ModifCadParser.LPAREN);
	        this.state = 73;
	        this.cadena();
	        this.state = 74;
	        this.match(ModifCadParser.RPAREN);
	        this.state = 75;
	        this.match(ModifCadParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ModifCadParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ModifCadParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(ModifCadParser.IMPRIMIR);
	        this.state = 80;
	        this.valor();
	        this.state = 81;
	        this.match(ModifCadParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ModifCadParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(ModifCadParser.DEVOLVER);
	        this.state = 84;
	        this.valor();
	        this.state = 85;
	        this.match(ModifCadParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ModifCadParser.RULE_valor);
	    try {
	        this.state = 90;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.match(ModifCadParser.TEXTO);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.match(ModifCadParser.NUMERO);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ModifCadParser.RULE_cadena);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.match(ModifCadParser.TEXTO);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ModifCadParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(ModifCadParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ModifCadParser.EOF = antlr4.Token.EOF;
ModifCadParser.VARIABLE = 1;
ModifCadParser.FUNCION = 2;
ModifCadParser.IMPRIMIR = 3;
ModifCadParser.DEVOLVER = 4;
ModifCadParser.MAYUSCULAS = 5;
ModifCadParser.MINUSCULAS = 6;
ModifCadParser.LONGITUD = 7;
ModifCadParser.INVERTIR = 8;
ModifCadParser.REEMPLAZAR = 9;
ModifCadParser.EQUAL = 10;
ModifCadParser.PUNTOYCOMA = 11;
ModifCadParser.COMA = 12;
ModifCadParser.LPAREN = 13;
ModifCadParser.RPAREN = 14;
ModifCadParser.LLA_ABRE = 15;
ModifCadParser.LLA_CIERRA = 16;
ModifCadParser.IDENTIFICADOR = 17;
ModifCadParser.NUMERO = 18;
ModifCadParser.TEXTO = 19;
ModifCadParser.WS = 20;

ModifCadParser.RULE_inicio = 0;
ModifCadParser.RULE_programa = 1;
ModifCadParser.RULE_declaracion = 2;
ModifCadParser.RULE_funcion = 3;
ModifCadParser.RULE_argumentos = 4;
ModifCadParser.RULE_instrucciones = 5;
ModifCadParser.RULE_operacionTexto = 6;
ModifCadParser.RULE_transformacion = 7;
ModifCadParser.RULE_impresion = 8;
ModifCadParser.RULE_retorno = 9;
ModifCadParser.RULE_valor = 10;
ModifCadParser.RULE_cadena = 11;
ModifCadParser.RULE_nombre = 12;

class InicioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_inicio;
    }

	programa() {
	    return this.getTypedRuleContext(ProgramaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterInicio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitInicio(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitInicio(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_programa;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	operacionTexto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionTextoContext);
	    } else {
	        return this.getTypedRuleContext(OperacionTextoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_declaracion;
    }

	VARIABLE() {
	    return this.getToken(ModifCadParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ModifCadParser.PUNTOYCOMA, 0);
	};

	EQUAL() {
	    return this.getToken(ModifCadParser.EQUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(ModifCadParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LLA_ABRE() {
	    return this.getToken(ModifCadParser.LLA_ABRE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	LLA_CIERRA() {
	    return this.getToken(ModifCadParser.LLA_CIERRA, 0);
	};

	LPAREN() {
	    return this.getToken(ModifCadParser.LPAREN, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	RPAREN() {
	    return this.getToken(ModifCadParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_argumentos;
    }

	nombre = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NombreContext);
	    } else {
	        return this.getTypedRuleContext(NombreContext,i);
	    }
	};

	COMA() {
	    return this.getToken(ModifCadParser.COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_instrucciones;
    }

	operacionTexto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionTextoContext);
	    } else {
	        return this.getTypedRuleContext(OperacionTextoContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionTextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_operacionTexto;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	EQUAL() {
	    return this.getToken(ModifCadParser.EQUAL, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(ModifCadParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(ModifCadParser.RPAREN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ModifCadParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterOperacionTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitOperacionTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitOperacionTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(ModifCadParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(ModifCadParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(ModifCadParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(ModifCadParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(ModifCadParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(ModifCadParser.IMPRIMIR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ModifCadParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(ModifCadParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(ModifCadParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(ModifCadParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(ModifCadParser.NUMERO, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(ModifCadParser.TEXTO, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModifCadParser.RULE_nombre;
    }

	IDENTIFICADOR() {
	    return this.getToken(ModifCadParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModifCadListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModifCadVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ModifCadParser.InicioContext = InicioContext; 
ModifCadParser.ProgramaContext = ProgramaContext; 
ModifCadParser.DeclaracionContext = DeclaracionContext; 
ModifCadParser.FuncionContext = FuncionContext; 
ModifCadParser.ArgumentosContext = ArgumentosContext; 
ModifCadParser.InstruccionesContext = InstruccionesContext; 
ModifCadParser.OperacionTextoContext = OperacionTextoContext; 
ModifCadParser.TransformacionContext = TransformacionContext; 
ModifCadParser.ImpresionContext = ImpresionContext; 
ModifCadParser.RetornoContext = RetornoContext; 
ModifCadParser.ValorContext = ValorContext; 
ModifCadParser.CadenaContext = CadenaContext; 
ModifCadParser.NombreContext = NombreContext; 
