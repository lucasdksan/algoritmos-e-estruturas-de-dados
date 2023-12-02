# Algoritmos e Estruturas de Dados

**JavaScript: Algoritmos + Estruturas de Dados**

## Arrays 🎞

Arrays são estruturas de dados fundamentais em programação que permitem armazenar coleções de elementos do mesmo tipo sob um único nome. Essa organização eficiente facilita o acesso e manipulação de dados em várias linguagens de programação.

Um array é composto por elementos indexados, o que significa que cada elemento possui uma posição única dentro do array. Esses índices começam geralmente em 0 e vão até o comprimento do array menos 1. Por exemplo, em um array de tamanho 5, os índices seriam 0, 1, 2, 3 e 4.

## Pilhas 📚

Coleção ordenada de itens que segue o princípio LIFO (Last In First Out), ou seja, o último a entrar é o primeiro a sair. Isso significa que o último elemento adicionado à pilha é o primeiro a ser removido. Esse comportamento torna as pilhas ideais para certos tipos de operações, como rastreamento de chamadas de funções, inversão de expressões e gerenciamento de histórico.

A estrutura de uma pilha é semelhante a uma pilha de pratos, onde você adiciona e remove pratos apenas no topo da pilha. Em uma pilha de software, os elementos são adicionados ou removidos apenas do topo da pilha, o que simplifica a manipulação dos dados.

As operações fundamentais em uma pilha incluem "push" para adicionar um elemento ao topo e "pop" para remover o elemento do topo. Além disso, é comum ter uma operação "peek" para acessar o elemento no topo sem removê-lo.

Pilhas são frequentemente usadas em situações em que a ordem de processamento é essencial. Por exemplo, ao avaliar expressões matemáticas, as pilhas podem ser utilizadas para inverter a ordem dos operandos e operadores para facilitar a computação.

Outra aplicação comum é no rastreamento de chamadas de funções. Cada vez que uma função é chamada, seu estado é empilhado, e quando a função é concluída, seu estado é removido da pilha. Isso permite que o programa retorne à função anterior, mantendo um controle eficiente do fluxo de execução.

## Filas 🚶🚶🚶🚶

Coleção ordenada de itens que segue o princípio FIFO(First In First Out), ou seja, o primeiro a entrar é o primeiro a sair. Um bom exemplo é uma fila de pessoas aguardando alguma coisa, o primeiro que chega é sempre o primeiro que sai. 

Operações Básicas:

* Enfileirar (enqueue): Adiciona um elemento ao final da fila.
* Desenfileirar (dequeue): Remove o elemento do início da fila.
* Frente (front): Retorna o elemento no início da fila sem removê-lo.
* Vazia (empty): Verifica se a fila está vazia.

As filas podem ser implementadas usando estruturas de dados como arrays ou listas encadeadas. Cada operação básica pode ser traduzida em operações específicas para a estrutura escolhida.