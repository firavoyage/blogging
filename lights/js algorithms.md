# JavaScript Algorithms and Data Structures

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster) [![codecov](https://camo.githubusercontent.com/ace288e7005c8469467bf2b11e874a66874783367ec2f6aba571ed1d532c4edc/68747470733a2f2f636f6465636f762e696f2f67682f7472656b686c65622f6a6176617363726970742d616c676f726974686d732f6272616e63682f6d61737465722f67726170682f62616467652e737667)](https://codecov.io/gh/trekhleb/javascript-algorithms) [![repo size](https://camo.githubusercontent.com/6c3b63dd41aa45293263afb05399caeef7ad79cec736baa236b91686c08d0269/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f7265706f2d73697a652f7472656b686c65622f6a6176617363726970742d616c676f726974686d732e737667)](https://camo.githubusercontent.com/6c3b63dd41aa45293263afb05399caeef7ad79cec736baa236b91686c08d0269/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f7265706f2d73697a652f7472656b686c65622f6a6176617363726970742d616c676f726974686d732e737667)

This repository contains JavaScript based examples of many popular algorithms and data structures.

Each algorithm and data structure has its own separate README with related explanations and links for further reading (including ones to YouTube videos).

*Read this in other languages:* [_简体中文_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md), [_繁體中文_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-TW.md), [_한국어_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md), [_日本語_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ja-JP.md), [_Polski_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.pl-PL.md), [_Français_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.fr-FR.md), [_Español_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.es-ES.md), [_Português_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.pt-BR.md), [_Русский_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ru-RU.md), [_Türkçe_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.tr-TR.md), [_Italiano_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.it-IT.md), [_Bahasa Indonesia_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.id-ID.md), [_Українська_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.uk-UA.md), [_Arabic_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ar-AR.md), [_Tiếng Việt_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.vi-VN.md), [_Deutsch_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.de-DE.md), [_Uzbek_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.uz-UZ.md), [_עברית_](https://github.com/trekhleb/javascript-algorithms/blob/master/README.he-IL.md)

_☝ Note that this project is meant to be used for learning and researching purposes only, and it is not meant to be used for production._

## Data Structures

[](https://github.com/trekhleb/javascript-algorithms#data-structures)

A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

Remember that each data has its own trade-offs. And you need to pay attention more to why you're choosing a certain data structure than to how to implement it.

`B` - Beginner, `A` - Advanced

- `B` [Linked List](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list)
- `B` [Doubly Linked List](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/doubly-linked-list)
- `B` [Queue](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/queue)
- `B` [Stack](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/stack)
- `B` [Hash Table](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/hash-table)
- `B` [Heap](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/heap) - max and min heap versions
- `B` [Priority Queue](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/priority-queue)
- `A` [Trie](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/trie)
- `A` [Tree](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree)
  - `A` [Binary Search Tree](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/binary-search-tree)
  - `A` [AVL Tree](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/avl-tree)
  - `A` [Red-Black Tree](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/red-black-tree)
  - `A` [Segment Tree](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
  - `A` [Fenwick Tree](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
- `A` [Graph](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/graph) (both directed and undirected)
- `A` [Disjoint Set](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/disjoint-set) - a union--find data structure or merge--find set
- `A` [Bloom Filter](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/bloom-filter)
- `A` [LRU Cache](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/lru-cache) - Least Recently Used (LRU) cache

## Algorithms

[](https://github.com/trekhleb/javascript-algorithms#algorithms)

An algorithm is an unambiguous specification of how to solve a class of problems. It is a set of rules that precisely define a sequence of operations.

`B` - Beginner, `A` - Advanced

### Algorithms by Topic

[](https://github.com/trekhleb/javascript-algorithms#algorithms-by-topic)

- Math
  - `B` [Bit Manipulation](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/bits) - set/get/update/clear bits, multiplication/division by two, make negative etc.
  - `B` [Binary Floating Point](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/binary-floating-point) - binary representation of the floating-point numbers.
  - `B` [Factorial](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/factorial)
  - `B` [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fibonacci) - classic and closed-form versions
  - `B` [Prime Factors](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/prime-factors) - finding prime factors and counting them using Hardy-Ramanujan's theorem
  - `B` [Primality Test](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/primality-test) (trial division method)
  - `B` [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  - `B` [Least Common Multiple](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/least-common-multiple) (LCM)
  - `B` [Sieve of Eratosthenes](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
  - `B` [Is Power of Two](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
  - `B` [Pascal's Triangle](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/pascal-triangle)
  - `B` [Complex Number](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/complex-number) - complex numbers and basic operations with them
  - `B` [Radian & Degree](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/radian) - radians to degree and backwards conversion
  - `B` [Fast Powering](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fast-powering)
  - `B` [Horner's method](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/horner-method) - polynomial evaluation
  - `B` [Matrices](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/matrix) - matrices and basic matrix operations (multiplication, transposition, etc.)
  - `B` [Euclidean Distance](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/euclidean-distance) - distance between two points/vectors/matrices
  - `A` [Integer Partition](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/integer-partition)
  - `A` [Square Root](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/square-root) - Newton's method
  - `A` [Liu Hui π Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
  - `A` [Discrete Fourier Transform](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
- Sets
  - `B` [Cartesian Product](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/cartesian-product) - product of multiple sets
  - `B` [Fisher--Yates Shuffle](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
  - `A` [Power Set](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/power-set) - all subsets of a set (bitwise, backtracking, and cascading solutions)
  - `A` [Permutations](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/permutations) (with and without repetitions)
  - `A` [Combinations](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combinations) (with and without repetitions)
  - `A` [Longest Common Subsequence](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-common-subsequence) (LCS)
  - `A` [Longest Increasing Subsequence](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-increasing-subsequence)
  - `A` [Shortest Common Supersequence](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/shortest-common-supersequence) (SCS)
  - `A` [Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
  - `A` [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
  - `A` [Combination Sum](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combination-sum) - find all combinations that form specific sum
- Strings
  - `B` [Hamming Distance](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
  - `B` [Palindrome](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/palindrome) - check if the string is the same in reverse
  - `A` [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  - `A` [Knuth--Morris--Pratt Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
  - `A` [Z Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/z-algorithm) - substring search (pattern matching)
  - `A` [Rabin Karp Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/rabin-karp) - substring search
  - `A` [Longest Common Substring](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/longest-common-substring)
  - `A` [Regular Expression Matching](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/regular-expression-matching)
- Searches
  - `B` [Linear Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/linear-search)
  - `B` [Jump Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/jump-search) (or Block Search) - search in sorted array
  - `B` [Binary Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/binary-search) - search in sorted array
  - `B` [Interpolation Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
- Sorting
  - `B` [Bubble Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/bubble-sort)
  - `B` [Selection Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/selection-sort)
  - `B` [Insertion Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/insertion-sort)
  - `B` [Heap Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/heap-sort)
  - `B` [Merge Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/merge-sort)
  - `B` [Quicksort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
  - `B` [Shellsort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/shell-sort)
  - `B` [Counting Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/counting-sort)
  - `B` [Radix Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/radix-sort)
  - `B` [Bucket Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/bucket-sort)
- Linked Lists
  - `B` [Straight Traversal](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/linked-list/traversal)
  - `B` [Reverse Traversal](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/linked-list/reverse-traversal)
- Trees
  - `B` [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/tree/depth-first-search) (DFS)
  - `B` [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/tree/breadth-first-search) (BFS)
- Graphs
  - `B` [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/depth-first-search) (DFS)
  - `B` [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/breadth-first-search) (BFS)
  - `B` [Kruskal's Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  - `A` [Dijkstra Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/dijkstra) - finding the shortest paths to all graph vertices from single vertex
  - `A` [Bellman-Ford Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/bellman-ford) - finding the shortest paths to all graph vertices from single vertex
  - `A` [Floyd-Warshall Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/floyd-warshall) - find the shortest paths between all pairs of vertices
  - `A` [Detect Cycle](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
  - `A` [Prim's Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  - `A` [Topological Sorting](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/topological-sorting) - DFS method
  - `A` [Articulation Points](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
  - `A` [Bridges](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/bridges) - DFS based algorithm
  - `A` [Eulerian Path and Eulerian Circuit](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
  - `A` [Hamiltonian Cycle](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  - `A` [Strongly Connected Components](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
  - `A` [Travelling Salesman Problem](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
- Cryptography
  - `B` [Polynomial Hash](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
  - `B` [Rail Fence Cipher](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/rail-fence-cipher) - a transposition cipher algorithm for encoding messages
  - `B` [Caesar Cipher](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/caesar-cipher) - simple substitution cipher
  - `B` [Hill Cipher](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/cryptography/hill-cipher) - substitution cipher based on linear algebra
- Machine Learning
  - `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 simple JS functions that illustrate how machines can actually learn (forward/backward propagation)
  - `B` [k-NN](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/ml/knn) - k-nearest neighbors classification algorithm
  - `B` [k-Means](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/ml/k-means) - k-Means clustering algorithm
- Image Processing
  - `B` [Seam Carving](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/image-processing/seam-carving) - content-aware image resizing algorithm
- Statistics
  - `B` [Weighted Random](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/statistics/weighted-random) - select the random item from the list based on items' weights
- Evolutionary algorithms
  - `A` [Genetic algorithm](https://github.com/trekhleb/self-parking-car-evolution) - example of how the genetic algorithm may be applied for training the self-parking cars
- Uncategorized
  - `B` [Tower of Hanoi](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/hanoi-tower)
  - `B` [Square Matrix Rotation](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
  - `B` [Jump Game](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples
  - `B` [Unique Paths](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples
  - `B` [Rain Terraces](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
  - `B` [Recursive Staircase](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
  - `B` [Best Time To Buy Sell Stocks](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - divide and conquer and one-pass examples
  - `B` [Valid Parentheses](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/stack/valid-parentheses) - check if a string has valid parentheses (using stack)
  - `A` [N-Queens Problem](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/n-queens)
  - `A` [Knight's Tour](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

[](https://github.com/trekhleb/javascript-algorithms#algorithms-by-paradigm)

An algorithmic paradigm is a generic method or approach which underlies the design of a class of algorithms. It is an abstraction higher than the notion of an algorithm, just as an algorithm is an abstraction higher than a computer program.

- Brute Force - look at all the possibilities and selects the best solution
  - `B` [Linear Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/linear-search)
  - `B` [Rain Terraces](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  - `B` [Recursive Staircase](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach the top
  - `A` [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/maximum-subarray)
  - `A` [Travelling Salesman Problem](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
  - `A` [Discrete Fourier Transform](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
- Greedy - choose the best option at the current time, without any consideration for the future
  - `B` [Jump Game](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/jump-game)
  - `A` [Unbound Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/knapsack-problem)
  - `A` [Dijkstra Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/dijkstra) - finding the shortest path to all graph vertices
  - `A` [Prim's Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  - `A` [Kruskal's Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
- Divide and Conquer - divide the problem into smaller parts and then solve those parts
  - `B` [Binary Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/search/binary-search)
  - `B` [Tower of Hanoi](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/hanoi-tower)
  - `B` [Pascal's Triangle](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/pascal-triangle)
  - `B` [Euclidean Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
  - `B` [Merge Sort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/merge-sort)
  - `B` [Quicksort](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/quick-sort)
  - `B` [Tree Depth-First Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/tree/depth-first-search) (DFS)
  - `B` [Graph Depth-First Search](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/depth-first-search) (DFS)
  - `B` [Matrices](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/matrix) - generating and traversing the matrices of different shapes
  - `B` [Jump Game](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/jump-game)
  - `B` [Fast Powering](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fast-powering)
  - `B` [Best Time To Buy Sell Stocks](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/best-time-to-buy-sell-stocks) - divide and conquer and one-pass examples
  - `A` [Permutations](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/permutations) (with and without repetitions)
  - `A` [Combinations](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combinations) (with and without repetitions)
  - `A` [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/maximum-subarray)
- Dynamic Programming - build up a solution using previously found sub-solutions
  - `B` [Fibonacci Number](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fibonacci)
  - `B` [Jump Game](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/jump-game)
  - `B` [Unique Paths](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/unique-paths)
  - `B` [Rain Terraces](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
  - `B` [Recursive Staircase](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach the top
  - `B` [Seam Carving](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/image-processing/seam-carving) - content-aware image resizing algorithm
  - `A` [Levenshtein Distance](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
  - `A` [Longest Common Subsequence](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-common-subsequence) (LCS)
  - `A` [Longest Common Substring](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/longest-common-substring)
  - `A` [Longest Increasing Subsequence](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-increasing-subsequence)
  - `A` [Shortest Common Supersequence](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/shortest-common-supersequence)
  - `A` [0/1 Knapsack Problem](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/knapsack-problem)
  - `A` [Integer Partition](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/integer-partition)
  - `A` [Maximum Subarray](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/maximum-subarray)
  - `A` [Bellman-Ford Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/bellman-ford) - finding the shortest path to all graph vertices
  - `A` [Floyd-Warshall Algorithm](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/floyd-warshall) - find the shortest paths between all pairs of vertices
  - `A` [Regular Expression Matching](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/string/regular-expression-matching)
- Backtracking - similarly to brute force, try to generate all possible solutions, but each time you generate the next solution, you test if it satisfies all conditions and only then continue generating subsequent solutions. Otherwise, backtrack and go on a different path to finding a solution. Normally the DFS traversal of state-space is being used.
  - `B` [Jump Game](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/jump-game)
  - `B` [Unique Paths](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/unique-paths)
  - `B` [Power Set](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/power-set) - all subsets of a set
  - `A` [Hamiltonian Cycle](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
  - `A` [N-Queens Problem](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/n-queens)
  - `A` [Knight's Tour](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/uncategorized/knight-tour)
  - `A` [Combination Sum](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combination-sum) - find all combinations that form specific sum
- Branch & Bound - remember the lowest-cost solution found at each stage of the backtracking search, and use the cost of the lowest-cost solution found so far as a lower bound on the cost of a least-cost solution to the problem in order to discard partial solutions with costs larger than the lowest-cost solution found so far. Normally, BFS traversal in combination with DFS traversal of state-space tree is being used.

## How to use this repository

[](https://github.com/trekhleb/javascript-algorithms#how-to-use-this-repository)

Install all dependencies

```
npm install

```

Run ESLint

You may want to run it to check code quality.

```
npm run lint

```

Run all tests

```
npm test

```

Run tests by name

```
npm test -- 'LinkedList'

```

Troubleshooting

If linting or testing is failing, try to delete the `node_modules` folder and re-install npm packages:

```
rm -rf ./node_modules
npm i

```

Also, make sure that you're using the correct Node version (`>=16`). If you're using [nvm](https://github.com/nvm-sh/nvm) for Node version management you may run `nvm use` from the root folder of the project and the correct version will be picked up.

Playground

You may play with data-structures and algorithms in `./src/playground/playground.js` file and write tests for it in `./src/playground/__test__/playground.test.js`.

Then just, simply run the following command to test if your playground code works as expected:

```
npm test -- 'playground'

```

## Useful Information

[](https://github.com/trekhleb/javascript-algorithms#useful-information)

### References

[](https://github.com/trekhleb/javascript-algorithms#references)

- [▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [✍🏻 Data Structure Sketches](https://okso.app/showcase/data-structures)

### Big O Notation

[](https://github.com/trekhleb/javascript-algorithms#big-o-notation)

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows. On the chart below, you may find the most common orders of growth of algorithms specified in Big O notation.

[![Big O graphs](https://github.com/trekhleb/javascript-algorithms/raw/master/assets/big-o-graph.png)](https://github.com/trekhleb/javascript-algorithms/blob/master/assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Type        | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------ |
| O(1)           | Constant    | 1                            | 1                             | 1                              |
| O(log N)       | Logarithmic | 3                            | 6                             | 9                              |
| O(N)           | Linear      | 10                           | 100                           | 1000                           |
| O(N log N)     | n log(n)    | 30                           | 600                           | 9000                           |
| O(N^2)         | Quadratic   | 100                          | 10000                         | 1000000                        |
| O(2^N)         | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                      |
| O(N!)          | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                     |

### Data Structure Operations Complexity

[](https://github.com/trekhleb/javascript-algorithms#data-structure-operations-complexity)

| Data Structure     | Access | Search | Insertion | Deletion | Comments                                             |
| ------------------ | :----: | :----: | :-------: | :------: | :--------------------------------------------------- |
| Array              |   1    |   n    |     n     |    n     |                                                      |
| Stack              |   n    |   n    |     1     |    1     |                                                      |
| Queue              |   n    |   n    |     1     |    1     |                                                      |
| Linked List        |   n    |   n    |     1     |    n     |                                                      |
| Hash Table         |   -    |   n    |     n     |    n     | In case of perfect hash function costs would be O(1) |
| Binary Search Tree |   n    |   n    |     n     |    n     | In case of balanced tree costs would be O(log(n))    |
| B-Tree             | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| Red-Black Tree     | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| AVL Tree           | log(n) | log(n) |  log(n)   |  log(n)  |                                                      |
| Bloom Filter       |   -    |   1    |     1     |    -     | False positives are possible while searching         |

### Array Sorting Algorithms Complexity

[](https://github.com/trekhleb/javascript-algorithms#array-sorting-algorithms-complexity)

| Name           |   Best   |         Average         |    Worst    | Memory | Stable | Comments                                                      |
| -------------- | :------: | :---------------------: | :---------: | :----: | :----: | :------------------------------------------------------------ |
| Bubble sort    |    n     |           n2            |     n2      |   1    |  Yes   |                                                               |
| Insertion sort |    n     |           n2            |     n2      |   1    |  Yes   |                                                               |
| Selection sort |    n2    |           n2            |     n2      |   1    |   No   |                                                               |
| Heap sort      | n log(n) |        n log(n)         |  n log(n)   |   1    |   No   |                                                               |
| Merge sort     | n log(n) |        n log(n)         |  n log(n)   |   n    |  Yes   |                                                               |
| Quick sort     | n log(n) |        n log(n)         |     n2      | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |
| Shell sort     | n log(n) | depends on gap sequence | n (log(n))2 |   1    |   No   |                                                               |
| Counting sort  |  n + r   |          n + r          |    n + r    | n + r  |  Yes   | r - biggest number in array                                   |
| Radix sort     |  n \* k  |         n \* k          |   n \* k    | n + k  |  Yes   | k - length of longest key                                     |
