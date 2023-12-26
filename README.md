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

A coleção sequencial de elementos, conhecida como lista ligada, se diferencia dos arrays pelo fato de não ser alocada de forma contígua na memória. Em uma lista ligada, cada elemento é encapsulado por um nó que armazena tanto o valor desse elemento quanto uma referência ao próximo elemento, estabelecendo uma estrutura de ponteiros. Ao contrário dos arrays, nos quais os elementos são armazenados em posições de memória contíguas, os nós das listas ligadas podem ocupar espaços dispersos na memória, sendo interconectados por meio dessas referências.

Para visualizar melhor, podemos imaginar a memória RAM como uma sequência de bytes. Na lista ligada, essa sequência é utilizada de maneira flexível, permitindo que os nós sejam distribuídos de forma não contígua, conforme necessário. Essa abordagem proporciona uma maior flexibilidade na gestão da memória, embora a navegação pela lista exija o uso dos ponteiros para percorrer os elementos encadeados. Essa característica torna as listas ligadas uma estrutura de dados versátil em situações em que a alocação contígua de memória pode ser limitante.

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

**Vantagens das Listas Ligadas:**

Inserções e remoções podem ser eficientes, especialmente em comparação com arrays, onde as operações podem exigir realocação de memória.
Não é necessário especificar o tamanho da lista antecipadamente.

**Desvantagens das Listas Ligadas:**

Acesso aos elementos é menos eficiente do que em arrays, pois requer percorrer a lista.
Ocupam mais espaço na memória devido aos ponteiros adicionais.

## Listas Duplamente Ligadas 🚂🚂

Uma lista duplamente ligada é uma estrutura de dados que consiste em elementos chamados nós, onde cada nó contém dados e duas referências (ponteiros) que apontam para o nó anterior e o próximo na sequência. Essa característica bidirecional oferece vantagens em termos de manipulação eficiente da lista em comparação com listas simplesmente ligadas.

**Características Principais:**

1. Nós Duplamente Ligados:

* Cada nó em uma lista duplamente ligada contém dois ponteiros: um para o nó anterior (prev) e outro para o próximo nó (next).

* Isso permite a navegação em ambas as direções, simplificando operações como a remoção de um nó sem a necessidade de percorrer toda a lista.

2. Inserção e Remoção Eficientes:

* A inserção e remoção de nós em uma lista duplamente ligada são mais eficientes em comparação com listas simplesmente ligadas.
* Para inserir ou remover um nó, apenas ajusta-se os ponteiros próximo e anterior, sem a necessidade de percorrer a lista inteira.

3. Acesso Aleatório:

* Ao contrário de listas simplesmente ligadas, as listas duplamente ligadas oferecem acesso bidirecional aos elementos, facilitando o acesso direto a um nó específico.

* Isso é particularmente útil em operações que envolvem navegação reversa na lista.

4. Uso Eficiente de Memória:

* Embora as listas duplamente ligadas usem mais memória devido aos ponteiros adicionais, elas proporcionam uma flexibilidade significativa em termos de manipulação de elementos.
* A capacidade de acessar elementos em ambas as direções pode superar a desvantagem de uso de memória em determinados contextos.

**Operações Comuns em Listas Duplamente Ligadas:**

1. Inserção:

* Inserir um novo nó geralmente envolve ajustar os ponteiros prev e next do nó anterior e próximo, respectivamente.

2. Remoção:

* Remover um nó envolve ajustar os ponteiros prev e next do nó anterior e próximo para ignorar o nó a ser removido.

3. Navegação:

* A navegação pode ocorrer tanto do início para o fim quanto do fim para o início, graças aos ponteiros bidirecionais.

4. Pesquisa:

* A pesquisa em uma lista duplamente ligada pode ser mais eficiente em comparação com uma lista simplesmente ligada, especialmente quando se trata de pesquisas reversas.

**Desvantagens:**

1. Uso de Memória:

* O uso de dois ponteiros por nó aumenta o consumo de memória em comparação com listas simplesmente ligadas.

2. Complexidade:

* A implementação e manutenção de listas duplamente ligadas podem ser mais complexas do que listas simplesmente ligadas devido à necessidade de gerenciar dois ponteiros para cada nó.

Em resumo, as listas duplamente ligadas oferecem eficiência em termos de inserção, remoção e navegação bidirecional, mas essa eficiência vem com o custo de um maior consumo de memória e complexidade na implementação. A escolha entre listas simplesmente e duplamente ligadas depende das necessidades específicas do problema e das operações frequentemente realizadas na estrutura de dados.

## Conjuntos 🛗

Em ciência da computação, um conjunto é uma estrutura de dados que armazena elementos sem repetição e não possui uma ordem específica. Conjuntos são amplamente utilizados em algoritmos e estruturas de dados devido à sua eficiência na execução de operações fundamentais, como inserção, remoção e verificação de pertencimento, em tempo constante ou próximo a isso.

**Aqui estão algumas operações comuns em conjuntos e suas descrições:**

1. Inserção: Adiciona um elemento ao conjunto. Se o elemento já estiver presente, a operação não tem efeito.

2. Remoção: Remove um elemento do conjunto, se estiver presente. Se o elemento não estiver no conjunto, a operação não tem efeito.

3. Pertencimento: Verifica se um elemento está presente no conjunto. Esta operação é executada em tempo constante na maioria das implementações.

4. União: Cria um novo conjunto que contém todos os elementos presentes nos conjuntos originais. Nenhum elemento é duplicado.

5. Interseção: Cria um novo conjunto que contém apenas os elementos que estão presentes em ambos os conjuntos originais.

6. Diferença: Cria um novo conjunto que contém os elementos presentes no primeiro conjunto, mas não no segundo.

7. Subconjunto: Verifica se todos os elementos de um conjunto estão contidos em outro conjunto.

Conjuntos podem ser implementados de várias maneiras, e a escolha da implementação depende das operações frequentemente realizadas e dos requisitos de desempenho. Algumas implementações comuns incluem:

1. Arrays ou Listas: Simplesmente armazenar elementos em uma estrutura de array ou lista, e realizar busca linear para verificar pertencimento. Isso pode ser eficiente para conjuntos pequenos, mas menos eficiente para conjuntos grandes devido à busca linear.

2. Árvores de Busca Binária: Manter os elementos em uma árvore de busca binária balanceada para realizar operações de inserção, remoção e pertencimento em tempo logarítmico.

3. Tabelas de Hash: Utilizar uma tabela de hash para armazenar elementos, permitindo acesso rápido e eficiente para operações de inserção, remoção e pertencimento em tempo constante na média.

## Dicionário e hashes 📖

Dicionários e tabelas hash são estruturas de dados fundamentais na ciência da computação, usadas para armazenar e recuperar informações de maneira eficiente. Ambas são tipos de coleções associativas, o que significa que permitem associar chaves a valores.

### Dicionário

Um dicionário, também conhecido como mapa ou tabela de símbolos, é uma estrutura de dados que mapeia chaves únicas para valores correspondentes. Cada chave em um dicionário deve ser única, e essa chave é usada para acessar ou modificar o valor associado a ela. Os dicionários são implementados em várias linguagens de programação com diferentes nomes, como "dict" em Python, "HashMap" em Java e "unordered_map" em C++.

Principais características dos dicionários:

1. Eficiência na Busca:

Os dicionários são projetados para fornecer acesso eficiente aos valores com base em suas chaves. Em geral, a busca, inserção e remoção de elementos em um dicionário têm complexidade média de tempo próxima a O(1) em casos ideais.

2. Chaves Únicas:

Cada chave em um dicionário deve ser única. Isso garante que cada valor esteja associado a uma chave específica, facilitando a busca e a manipulação de dados.

3. Flexibilidade de Tipos:

Dicionários geralmente suportam associações de chaves e valores de vários tipos. Isso proporciona flexibilidade ao trabalhar com diferentes tipos de dados.

4. Dicionários em Linguagens Populares:

 * Python: dict
 * Java: HashMap
 * C++: std::unordered_map
 * JavaScript: Objetos literais ({})

### Hashes

Uma tabela hash é uma estrutura de dados que utiliza uma função de hash para mapear chaves para índices em uma tabela. Essa técnica é eficiente para busca, inserção e remoção de elementos. A função de hash transforma a chave em um índice, onde o valor associado à chave pode ser encontrado.

Principais características das tabelas hash:

1. Função de Hash:

A função de hash é crucial para o desempenho da tabela hash. Ela transforma a chave em um índice na tabela. Uma boa função de hash distribui as chaves de forma uniforme para evitar colisões.

2. Colisões:

Colisões ocorrem quando duas chaves diferentes produzem o mesmo índice após a aplicação da função de hash. Existem várias técnicas para lidar com colisões, como encadeamento separado e endereçamento aberto.

3. Eficiência Média de Tempo:

Em média, a busca, inserção e remoção em uma tabela hash têm complexidade de tempo O(1) se a função de hash for bem projetada e as colisões forem tratadas eficientemente.

4. Tabelas Hash em Linguagens Populares:

 * Python: dict
 * Java: HashMap
 * C++: std::unordered_map
 * JavaScript: Objetos literais ({})

### Árvores de Busca Binária (BST) 🌲

Árvores de Busca Binária (BST, do inglês Binary Search Tree) são estruturas de dados fundamentais na ciência da computação, utilizadas para organizar e buscar dados de maneira eficiente. Elas pertencem à categoria de árvores binárias, onde cada nó tem no máximo dois filhos: um à esquerda e outro à direita. A propriedade chave das BSTs é que, para cada nó, todos os elementos na subárvore à esquerda têm valores menores que o nó e todos os elementos na subárvore à direita têm valores maiores.

Vamos explorar alguns conceitos-chave relacionados a árvores de busca binária:

1 Inserção:

Ao inserir um novo elemento em uma BST, o algoritmo compara o valor a ser inserido com o valor do nó atual.
Se for menor, a inserção ocorre na subárvore à esquerda; se for maior, ocorre na subárvore à direita.
O processo é repetido até encontrar um local vazio (um nó folha) onde o novo elemento pode ser adicionado.

2 Busca:

A busca em uma BST é eficiente devido à sua estrutura ordenada.
Começa no nó raiz e compara o valor buscado com o valor do nó atual.
Com base na comparação, a busca continua na subárvore à esquerda ou à direita até encontrar o elemento desejado ou atingir uma folha.

3 Remoção:

A remoção de um elemento em uma BST envolve três casos: nó sem filhos, nó com um filho, e nó com dois filhos.
Para o caso de dois filhos, pode-se substituir o nó a ser removido pelo menor elemento da subárvore à direita ou pelo maior da subárvore à esquerda.

4 Travessias:

Existem várias formas de percorrer uma árvore de busca binária: pré-ordem, em ordem e pós-ordem.
Em uma travessia em ordem, os elementos são visitados em ordem crescente.

5 Complexidade de Tempo:

A complexidade de tempo para operações em uma BST depende da altura da árvore.
Em uma BST balanceada, a altura é logarítmica em relação ao número de elementos, garantindo operações eficientes.
No pior caso (BST desbalanceada), a altura pode ser linear, levando a operações menos eficientes.

6 Balanceamento:

O balanceamento de uma BST é crucial para garantir uma altura logarítmica, o que mantém as operações eficientes.
Árvores balanceadas, como AVL e Red-Black Trees, são variações de árvores de busca binária que mantêm automaticamente o equilíbrio.

7 Aplicações:

BSTs são amplamente utilizadas em bancos de dados para otimizar operações de busca.
São fundamentais em algoritmos de ordenação, como o algoritmo de ordenação em árvore (Tree Sort).

Em resumo, as árvores de busca binária oferecem uma estrutura eficiente para armazenar, buscar e organizar dados, mas é crucial garantir o balanceamento para manter a eficiência em operações. Existem várias variações e aprimoramentos das BSTs, dependendo dos requisitos específicos de cada aplicação.