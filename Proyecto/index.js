import antlr4 from 'antlr4';
import readline from 'readline';
import ModifCadLexer from './generated/ModifCadLexer.js';
import ModifCadParser from './generated/ModifCadParser.js';
import CustomModifCadListener from './CustomModifCadListener.js';
import CustomModifCadVisitor from './CustomModifCadVisitor.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su cadena: ', function (input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new ModifCadLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ModifCadParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.programa(); // 'inicio' es la regla inicial de tu gramática

  // 1. Mostrar tokens y lexemas
  tokens.fill();
  console.log('\nTabla de Tokens:');

  console.table(tokens.tokens.map(token => ({
    Lexema: token.text,
    Token: ModifCadLexer.symbolicNames[token.type]
  })).filter(t => t.Token !== undefined));

  // 2. Mostrar árbol sintáctico
  console.log('\nÁrbol sintáctico:\n');
  console.log(tree.toStringTree(ModifCadParser.ruleNames));

  // 3. Escuchar eventos (si se implementó algo en el Listener)
  const listener = new CustomModifCadListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  // 4. Visitar árbol y traducir/interpetar
  const visitor = new CustomModifCadVisitor();
  const result = visitor.visit(tree);
  const jsCode = result.codigo;

  console.log('\nTraducción a JavaScript:\n' + jsCode);

  // 5. Interpretar resultado
  console.log('\nResultado de la interpretación:\n');
  try {
    eval(jsCode);
  } catch (e) {
    console.error('Error al interpretar el código:', e.message);
  }

  rl.close();
});
