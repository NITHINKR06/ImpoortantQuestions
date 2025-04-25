import React from 'react';

export default function Imp1() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <Section
        title="1. Decrease and Conquer"
        content={
          <>
            <p className="mb-2">
              Decrease and Conquer is a problem-solving technique where a problem is reduced to a smaller instance of the same problem, solved recursively, and then combined to obtain the final solution. It is commonly used in algorithms like binary search, insertion sort, and depth-first search. Unlike Divide and Conquer which splits problems into multiple subproblems, this method only reduces the problem size by one at each step.
            </p>
          </>
        }
      />

      <Section
        title="2. DFS, BFS, Differences & Source Steps"
        content={
          <>
            <h3 className="text-xl font-semibold text-indigo-700 mb-1">Depth-First Search (DFS)</h3>
            <p className="mb-2">
              DFS is a traversal algorithm that explores as deep as possible along one branch before backtracking. It uses a stack (explicit or recursive).
            </p>
            <h3 className="text-xl font-semibold text-indigo-700 mb-1">Breadth-First Search (BFS)</h3>
            <p className="mb-2">
              BFS is a traversal algorithm that explores all neighbors before moving to the next depth level. It uses a queue.
            </p>
            <div className="mb-2">
              <strong>Differences:</strong>
              <ul className="list-disc ml-5">
                <li>DFS is suitable for deep structures, while BFS is best for shortest path problems.</li>
              </ul>
            </div>
            <div>
              <strong>Source Steps:</strong>
              <ul className="list-decimal ml-5">
                <li>
                  <strong>DFS:</strong> Start → Push node to stack → Visit → Explore deeper → Backtrack.
                </li>
                <li>
                  <strong>BFS:</strong> Start → Enqueue node → Visit → Explore all neighbors → Dequeue → Repeat.
                </li>
              </ul>
            </div>
          </>
        }
      />

      <Section
        title="3. Transfer and Conquer (Three Major Variations)"
        content={
          <>
            <ul className="list-disc ml-5">
              <li>
                <strong>Representation Change:</strong> Transform data structures (e.g., adjacency matrix to adjacency list).
              </li>
              <li>
                <strong>Problem Reduction:</strong> Converting a problem into another well-known problem (e.g., converting pathfinding to shortest path computation).
              </li>
              <li>
                <strong>Preprocessing:</strong> Optimizing data before solving (e.g., sorting before searching).
              </li>
            </ul>
          </>
        }
      />

      <Section
        title="4. AVL Tree & Rotations"
        content={
          <>
            <p className="mb-2">
              An AVL Tree is a self-balancing binary search tree where the height difference between left and right subtrees is at most 1. Balancing is maintained through rotations.
            </p>
            <ul className="list-disc ml-5">
              <li><strong>LL (Left Rotation):</strong> Used when there is a right-heavy imbalance.</li>
              <li><strong>RR (Right Rotation):</strong> Used when there is a left-heavy imbalance.</li>
              <li><strong>LR (Left-Right Rotation):</strong> A left-heavy subtree with a right-heavy child.</li>
              <li><strong>RL (Right-Left Rotation):</strong> A right-heavy subtree with a left-heavy child.</li>
            </ul>
            <p className="mt-2">
              Problems include re-balancing the tree after insertions and deletions to maintain O(log n) operations.
            </p>
          </>
        }
      />

      <Section
        title="5. 2-3 Tree & Problems"
        content={
          <>
            <p className="mb-2">
              A 2-3 tree is a balanced search tree where each node can have either one key (with two children) or two keys (with three children). It maintains balance by splitting full nodes.
            </p>
            <p>
              Problems include handling node splits when a node overflows, maintaining overall balance, and ensuring efficient insertion/deletion.
            </p>
          </>
        }
      />

      <Section
        title="6. Constructing a Tree and Representing an Array"
        content={
          <>
            <p className="mb-2">
              A binary tree can be represented as an array with the following index relations: for any parent at index <code>i</code>, the left child is at index <code>2i + 1</code> and the right child is at index <code>2i + 2</code>.
            </p>
            <div className="bg-gray-100 p-4 rounded-md font-mono">
              {`Array: [10, 20, 30, 40, 50, 60]
Tree:
       10
      /  \\
    20    30
   /  \\   /
 40   50 60`}
            </div>
            <p className="mt-2">
              Tree Construction: Insert elements while maintaining binary search tree properties.
            </p>
          </>
        }
      />

      <Section
        title="7. Time-Space Trade-off"
        content={
          <>
            <p className="mb-2">
              A balance between time complexity and space complexity in an algorithm. For example, a hash table offers O(1) search time at the cost of additional space, whereas merge sort takes O(n log n) time but requires extra space for merging.
            </p>
            <p>
              In summary, time-efficient algorithms may use more space while space-efficient ones may run slower.
            </p>
          </>
        }
      />

      <Section
        title="8. Horspool Algorithm: Steps, Shift Table & Algorithm"
        content={
          <>
            <ol className="list-decimal ml-5 mb-2">
              <li>Preprocess the pattern to build a shift table.</li>
              <li>Start pattern matching from right to left.</li>
              <li>If a mismatch occurs, shift based on the shift table.</li>
              <li>Repeat until the entire text is scanned.</li>
            </ol>
            <p className="mb-2">
              The shift table stores how far to shift the pattern based on the mismatched character positions, thus improving the matching efficiency.
            </p>
            <p>
              The algorithm builds the shift table first, then scans the text using right-to-left pattern matching, shifting the pattern based on table values.
            </p>
          </>
        }
      />

      <Section
        title="9. Dynamic Programming: Warshall’s & Floyd’s Algorithm"
        content={
          <>
            <p className="mb-2">
              <strong>Warshall’s Algorithm:</strong> Used to compute the transitive closure of a graph by updating a Boolean matrix iteratively to determine reachability.
            </p>
            <p className="mb-2">
              <strong>Floyd’s Algorithm:</strong> Computes the shortest paths between all pairs of vertices in a weighted graph using a dynamic programming approach.
            </p>
            <p>
              In summary, Warshall’s algorithm is focused on reachability (updating Boolean matrices), whereas Floyd’s algorithm deals with weighted adjacency matrices to find the shortest paths.
            </p>
          </>
        }
      />

      <Section
        title="Difference Between BFS & DFS"
        content={
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border border-gray-300">Feature</th>
                    <th className="px-4 py-2 border border-gray-300">BFS (Breadth-First Search)</th>
                    <th className="px-4 py-2 border border-gray-300">DFS (Depth-First Search)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Definition</td>
                    <td className="px-4 py-2 border border-gray-300">
                      Explores all neighbors at the current level before going deeper.
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      Explores as deep as possible before backtracking.
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Data Structure</td>
                    <td className="px-4 py-2 border border-gray-300">Queue (FIFO)</td>
                    <td className="px-4 py-2 border border-gray-300">Stack (LIFO) or recursion</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Traversal Approach</td>
                    <td className="px-4 py-2 border border-gray-300">Level-wise traversal</td>
                    <td className="px-4 py-2 border border-gray-300">Deep traversal with backtracking</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Use Case</td>
                    <td className="px-4 py-2 border border-gray-300">Best for shortest path problems in unweighted graphs</td>
                    <td className="px-4 py-2 border border-gray-300">Pathfinding, exhaustive search in puzzles/mazes</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Space Complexity</td>
                    <td className="px-4 py-2 border border-gray-300">O(V + E)</td>
                    <td className="px-4 py-2 border border-gray-300">O(V) (recursion depth) or O(V + E) (explicit stack)</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Time Complexity</td>
                    <td className="px-4 py-2 border border-gray-300">O(V + E)</td>
                    <td className="px-4 py-2 border border-gray-300">O(V + E)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong>When to Use:</strong> Choose BFS for shortest path or level-based exploration, and DFS for deep traversal or when memory usage is a concern in large graphs.
            </p>
          </>
        }
      />
    </main>
  );
}

// Reusable Section component defined locally
const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
      <div className="text-gray-800 text-base md:text-lg">{content}</div>
    </section>
  );
};
