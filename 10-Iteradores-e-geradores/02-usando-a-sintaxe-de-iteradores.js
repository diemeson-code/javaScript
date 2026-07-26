/**Hoje vamos focar nos aspectos mais avançados dos iteradores, especialmente nos iteradores personalizados e no método next(). Embora tenhamos abordado forEach, for...of e for...in em aulas anteriores, hoje estamos indo além, explorando como você pode ter um controle mais granular sobre a iteração em JavaScript.

O Método next()
O método next() é uma parte intrínseca do protocolo de iterador em JavaScript. Ele retorna um objeto com duas propriedades:

value: O valor atual na sequência de iteração.
done: Um booleano indicando se a iteração foi concluída ou não.
Quando você chama next(), a execução dentro do iterador avança para o próximo yield (em um gerador) ou para o próximo valor em uma sequência personalizada.

Vamos considerar um exemplo simples: */

// Criando um iterador personalizado
const myIterator = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};
 
const iterator = myIterator[Symbol.iterator]();
 
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

/**Neste exemplo, criamos um iterador personalizado chamado myIterator com um método [Symbol.iterator] que retorna um objeto com um método next(). Cada vez que next() é chamado, ele retorna o próximo valor no array data e indica se a iteração está completa ou não.

Iteradores com Objetos Complexos
Até agora, vimos um exemplo de iteração com um array de números simples. Mas e se você quiser iterar através de objetos mais complexos, como um conjunto de registros de usuários ou até mesmo uma árvore de elementos DOM? Vamos explorar como você pode fazer isso.

Suponha que temos um objeto que contém informações sobre vários estudantes, e queremos iterar por ele: */
/* *
const students = {
  'Alice': { age: 20, grade: 'A' },
  'Bob': { age: 21, grade: 'B' },
  'Charlie': { age: 22, grade: 'C' }
};
 
const studentIterator = {
  [Symbol.iterator]() {
    const names = Object.keys(students);
    let index = 0;
    return {
      next() {
        if (index < names.length) {
          const name = names[index++];
          return { value: { name, ...students[name] }, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
 
const iterator = studentIterator[Symbol.iterator]();
 
console.log(iterator.next()); // {value: {name: 'Alice', age: 20, grade: 'A'}, done: false}
console.log(iterator.next()); // {value: {name: 'Bob', age: 21, grade: 'B'}, done: false}
console.log(iterator.next()); // {value: {name: 'Charlie', age: 22, grade: 'C'}, done: false}
console.log(iterator.next()); */// {value: undefined, done: true}

/**Neste exemplo, criamos um iterador para o objeto students. O iterador pega cada chave do objeto students, busca o objeto associado e o devolve quando o método next() é chamado.

Este é um exemplo simples, mas você pode imaginar que a lógica dentro de next() pode se tornar muito mais complexa, dependendo das necessidades do seu projeto.

Quando Usar Iteradores Personalizados e Suas Vantagens
Até agora, você pode estar se perguntando, “Quando devo realmente usar um iterador personalizado em vez de simplesmente usar os métodos iteráveis embutidos em arrays ou outros objetos em JavaScript?”

Aqui estão algumas situações e vantagens para considerar:

Controle Granular: Iteradores personalizados dão a você um controle muito mais granular sobre o processo de iteração. Isso é útil quando você tem requisitos complexos que os métodos embutidos não conseguem atender facilmente.
Otimização de Performance: Se você está trabalhando com grandes volumes de dados, um iterador personalizado pode ser mais eficiente, pois permite que você pegue e processe cada item individualmente, sem ter que carregar tudo na memória de uma vez.
Reusabilidade: Se você tem uma lógica de iteração específica que é usada em vários lugares do seu código, encapsular essa lógica em um iterador personalizado pode torná-lo reutilizável e mais fácil de manter.
Trabalhando com Tipos de Dados Diferentes: Iteradores personalizados são úteis quando você está trabalhando com tipos de dados que não são naturalmente iteráveis ou quando quer iterar por propriedades de um objeto em uma ordem específica.
Lógica de Negócios Complexa: Se a sua iteração envolve lógica de negócios mais complexa (como filtragem condicional, transformações, etc.), um iterador personalizado pode tornar esse código muito mais claro e testável.
Compatibilidade: Usar iteradores personalizados pode tornar seu código mais flexível e compatível com outras partes do seu projeto ou com outras bibliotecas que esperam um iterável padrão.
Esses são apenas alguns exemplos. A escolha entre usar iteradores embutidos ou personalizados dependerá do seu caso específico, mas saber como criar seus próprios iteradores te dá uma ferramenta poderosa para resolver problemas complexos.

Agote deixei alguns exercicios aqui embaixo para você praticar e espero você na próxima aula!

Exercícios Práticos
Para consolidar o conhecimento adquirido nesta aula, aqui estão alguns desafios práticos para você:

Iterador Simples: Crie um iterador personalizado que percorre um array de números inteiros e retorna apenas os números pares. Teste o iterador com um loop for...of
1
// Dica: Use o método next() para implementar essa lógica.
Iterando Objetos: Crie um iterador que itere através das propriedades de um objeto. O iterador deve retornar pares de chave-valor.
1
// Exemplo de objeto para iterarconst obj = {a: 1, b: 2, c: 3};
Iterador com Filtro: Desenvolva um iterador que itere através de um array de strings e retorne apenas as strings que contêm uma determinada substring.
1
// Dica: Você pode usar o método includes() das strings para isso.
Benchmarking: Compare o tempo de execução do seu iterador personalizado de números pares com um loop simples que faz a mesma coisa. Isso te dará uma ideia das considerações de performance ao usar iteradores personalizados.
1
// Dica: Use performance.now() para medir o tempo de execução.
Espero que esses exercícios ajudem você a entender melhor como e quando usar iteradores personalizados em JavaScript. Boa sorte e nos vemos na próxima aula! */