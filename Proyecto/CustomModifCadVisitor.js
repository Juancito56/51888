import ModifCadVisitor from './generated/ModifCadVisitor.js';

export default class CustomModifCadVisitor extends ModifCadVisitor {
  constructor() {
    super();
    this.variables = {};
    this.codigo = '';
    this.resultadoFinal = null;
  }

  visitInicio(ctx) {
    return this.visit(ctx.Programa());
  }

  visitPrograma(ctx) {
    let salida = '';

    for (let child of ctx.children) {
      const resultado = this.visit(child);
      if (resultado?.codigo) {
        salida += resultado.codigo + '\n';
      }
    }

    return { codigo: salida, resultado: this.resultadoFinal };
  }

  visitDeclaracion(ctx) {
    const nombre = ctx.nombre().getText();
    let resultado = null;
    let valorJS = 'undefined';

    if (ctx.valor()) {
      const evaluado = this.visit(ctx.valor());
      resultado = evaluado.resultado;
      valorJS = evaluado.codigo;
      this.variables[nombre] = resultado;
    }

    return {
      codigo: `let ${nombre} = ${valorJS};`,
      resultado,
    };
  }

  visitOperacionTexto(ctx) {
    const nombre = ctx.nombre().getText();
    const resultado = this.visit(ctx.transformacion());
    this.variables[nombre] = resultado.resultado;

    return {
      codigo: `let ${nombre} = ${resultado.codigo}; // => ${resultado.resultado}`,
      resultado: resultado.resultado,
    };
  }

  visitTransformacion(ctx) {
    const tipo = ctx.children[0].getText();
    const argumento = ctx.cadena().getText().replaceAll('"', '');
    const valor = this.variables[argumento] ?? argumento;

    let resultado = '';
    let codigoJS = '';

    switch (tipo) {
      case 'MAYUS':
        resultado = String(valor).toUpperCase();
        codigoJS = `(${JSON.stringify(valor)}).toUpperCase()`;
        break;
      case 'MINUS':
        resultado = String(valor).toLowerCase();
        codigoJS = `(${JSON.stringify(valor)}).toLowerCase()`;
        break;
      case 'LONGITUD':
        resultado = String(valor).length;
        codigoJS = `(${JSON.stringify(valor)}).length`;
        break;
      case 'INVERTIR':
        resultado = String(valor).split('').reverse().join('');
        codigoJS = `(${JSON.stringify(valor)}).split('').reverse().join('')`;
        break;
      case 'REEMPLAZAR':
        resultado = String(valor).replaceAll('a', '@');
        codigoJS = `(${JSON.stringify(valor)}).replaceAll('a', '@')`;
        break;
      default:
        resultado = valor;
        codigoJS = JSON.stringify(valor);
        break;
    }

    return { codigo: codigoJS, resultado };
  }

  visitImpresion(ctx) {
    const val = this.visit(ctx.valor());
    console.log(val.resultado);
    return {
      codigo: `console.log(${val.codigo}); // imprime: ${val.resultado}`,
    };
  }

  visitRetorno(ctx) {
    const val = this.visit(ctx.valor());
    this.resultadoFinal = val.resultado;
    return {
      codigo: `return ${val.codigo}; // => ${val.resultado}`,
    };
  }

  visitValor(ctx) {
    if (ctx.TEXTO()) {
      const texto = ctx.TEXTO().getText();
      return {
        codigo: texto,
        resultado: texto.slice(1, -1), // eliminar comillas
      };
    } else if (ctx.NUMERO()) {
      const num = parseInt(ctx.NUMERO().getText());
      return { codigo: num, resultado: num };
    } else if (ctx.nombre()) {
      const nombre = ctx.nombre().getText();
      const val = this.variables[nombre] ?? nombre;
      return { codigo: nombre, resultado: val };
    }
    return { codigo: 'undefined', resultado: undefined };
  }

  visitNombre(ctx) {
    return ctx.IDENTIFICADOR().getText();
  }

  visitCadena(ctx) {
    if (ctx.TEXTO()) return ctx.TEXTO().getText();
    else return ctx.nombre().getText();
  }
}
