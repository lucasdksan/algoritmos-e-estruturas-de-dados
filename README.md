# Algoritmos e Estruturas de Dados

*JavaScript: Algoritmos + Estruturas de Dados*

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

É uma estrutura de dados que organiza elementos de forma linear, seguindo o princípio "primeiro a entrar, primeiro a sair" (FIFO - First In, First Out). Isso significa que o primeiro elemento adicionado à fila é o primeiro a ser removido. Filas são amplamente utilizadas em algoritmos e sistemas para gerenciar ordens de execução, processos, solicitações e outras situações em que a ordem de chegada é significativa.

Operações Básicas:

1. Enfileirar (enqueue): Adiciona um elemento ao final da fila.
2. Desenfileirar (dequeue): Remove o elemento do início da fila.
3. Frente (front): Retorna o elemento no início da fila sem removê-lo.
4. Vazia (empty): Verifica se a fila está vazia.

As filas podem ser implementadas usando estruturas de dados como arrays ou listas encadeadas. Cada operação básica pode ser traduzida em operações específicas para a estrutura escolhida.

Filas com prioridade são uma extensão das filas tradicionais, onde cada elemento tem uma prioridade associada. Ao contrário das filas convencionais, onde o primeiro a entrar é o primeiro a sair (FIFO), nas filas com prioridade, os elementos são retirados com base em suas prioridades. O elemento com a maior (ou menor, dependendo da implementação) prioridade é retirado primeiro.

## Listas Ligadas 🚂

Coleção sequencial de elementos, mas diferente dos arrays, não são alocados de forma contígua na memória. Cada elemento é construído de um nó, que armazena tanto o valor como uma referência ao próximo elemento (ponteiro).


Uma lista ligada (linked list) é uma estrutura de dados linear na qual elementos são armazenados em nós, e cada nó possui um ponteiro que aponta para o próximo nó na sequência. Diferentemente de arrays, onde os elementos são armazenados em posições de memória contíguas, em listas ligadas, os nós podem estar dispersos na memória e são conectados por meio de ponteiros.

Existem vários tipos de listas ligadas, mas as duas principais categorias são:

1. Lista Ligada Simples (Singly Linked List): Cada nó na lista contém um elemento de dado e um ponteiro para o próximo nó na sequência.

2. Lista Ligada Dupla (Doubly Linked List): Cada nó contém um elemento de dado e dois ponteiros - um para o próximo nó e outro para o nó anterior na sequência.

Aqui estão alguns conceitos-chave relacionados a listas ligadas:

1. Nó (Node): Um nó é a unidade básica de uma lista ligada. Ele contém um elemento de dado e um ou mais ponteiros para outros nós.

2. Ponteiro (Pointer): Um ponteiro é uma variável que armazena o endereço de memória de outra variável ou objeto. Em listas ligadas, os ponteiros são usados para conectar os nós.

3. Cabeça (Head): A cabeça é o primeiro nó na lista. Ela serve como ponto de entrada para acessar o restante da lista.

4. Cauda (Tail): A cauda é o último nó na lista. Em algumas implementações, a cauda pode apontar para None (ou null em outras linguagens) para indicar o final da lista.

5. Inserção: Adicionar um novo nó à lista. Pode ser no início (inserção no início), no final (inserção no final) ou entre dois nós existentes (inserção no meio).

6. Remoção: Excluir um nó da lista. Pode ser no início, no final ou no meio da lista.

7. Travessia (Traversal): Percorrer todos os nós da lista, geralmente usando loops ou recursão.

*Vantagens das Listas Ligadas:*

Inserções e remoções podem ser eficientes, especialmente em comparação com arrays, onde as operações podem exigir realocação de memória.
Não é necessário especificar o tamanho da lista antecipadamente.

*Desvantagens das Listas Ligadas:*

Acesso aos elementos é menos eficiente do que em arrays, pois requer percorrer a lista.
Ocupam mais espaço na memória devido aos ponteiros adicionais.