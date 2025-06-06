import ModifCadListener from './generated/ModifCadListener.js';

export default class CustomModifCadListener extends ModifCadListener {
  enterAsignacion(ctx) {
    console.log(`Se detectó una asignación: ${ctx.getText()}`);
  }

  enterImprimir(ctx) {
    console.log(`Se detectó una impresión: ${ctx.getText()}`);
  }

  enterExpr(ctx) {
    console.log(`Expresión detectada: ${ctx.getText()}`);
  }

  // Podés agregar más métodos según los nodos de tu gramática,
  // por ejemplo enterInicio, enterOperacion, etc.
}
