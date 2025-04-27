import React, { useState, useEffect } from 'react';

export default function InsertionSortVisualizer() {
  const [array, setArray] = useState(['E', 'X', 'A', 'M', 'P', 'L', 'E']);
  const [sortedArray, setSortedArray] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [sortingSteps, setSortingSteps] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [currentKey, setCurrentKey] = useState(null);
  const [currentJ, setCurrentJ] = useState(null);

  // Generate the sorting steps
  useEffect(() => {
    const steps = generateSortingSteps([...array]);
    setSortingSteps(steps);
    setSortedArray([...array]);
  }, [array]);

  // Improved generateSortingSteps function with clear explanations
  const generateSortingSteps = (arr) => {
    const steps = [];

    steps.push({
      array: [...arr],
      description: "Start: Unsorted array given.",
      keyIndex: null,
      compareIndex: null,
      sortedTill: 0,
    });

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      steps.push({
        array: [...arr],
        description: `Selecting '${key}' at index ${i} as the key to insert.`,
        keyIndex: i,
        compareIndex: null,
        sortedTill: i,
      });

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];

        steps.push({
          array: [...arr],
          description: `Since '${arr[j]}' > '${key}', shift '${arr[j]}' one position to the right.`,
          keyIndex: i,
          compareIndex: j,
          sortedTill: i,
        });

        j--;
      }

      arr[j + 1] = key;

      if (j + 1 !== i) {
        steps.push({
          array: [...arr],
          description: `Placed '${key}' into correct position at index ${j + 1}.`,
          keyIndex: j + 1,
          compareIndex: null,
          sortedTill: i + 1,
        });
      } else {
        steps.push({
          array: [...arr],
          description: `'${key}' is already in the correct position.`,
          keyIndex: i,
          compareIndex: null,
          sortedTill: i + 1,
        });
      }
    }

    steps.push({
      array: [...arr],
      description: "✅ Array fully sorted: all elements are now in order.",
      keyIndex: null,
      compareIndex: null,
      sortedTill: arr.length,
    });

    return steps;
  };

  // Animation controls
  const startAnimation = () => {
    if (currentStep >= sortingSteps.length - 1) {
      setCurrentStep(0);
    }
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  const stepForward = () => {
    if (currentStep < sortingSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      updateStateFromStep(currentStep + 1);
    }
  };

  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      updateStateFromStep(currentStep - 1);
    }
  };

  const updateStateFromStep = (stepIndex) => {
    const step = sortingSteps[stepIndex];
    setSortedArray(step.array);
    setCurrentKey(step.keyIndex);
    setCurrentJ(step.compareIndex);
  };

  // Handle animation loop
  useEffect(() => {
    let animationTimer;

    if (isAnimating && currentStep < sortingSteps.length - 1) {
      animationTimer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        updateStateFromStep(currentStep + 1);
      }, speed);
    } else if (currentStep >= sortingSteps.length - 1) {
      setIsAnimating(false);
    }

    return () => clearTimeout(animationTimer);
  }, [isAnimating, currentStep, sortingSteps, speed]);

  // Reset the visualizer
  const resetArray = () => {
    setIsAnimating(false);
    setCurrentStep(0);
    setArray(['E', 'X', 'A', 'M', 'P', 'L', 'E']);
    setSortedArray(['E', 'X', 'A', 'M', 'P', 'L', 'E']);
    setCurrentKey(null);
    setCurrentJ(null);
  };

  // Get current description
  const currentDescription = currentStep < sortingSteps.length 
    ? sortingSteps[currentStep].description 
    : '';

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-indigo-700">Insertion Sort Visualization</h1>
      
      {/* Array visualization */}
      <div className="mb-8">
        <div className="flex justify-center mb-2 flex-wrap">
          {sortedArray.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center 
                w-12 h-12 m-1 text-lg font-bold rounded-md transition
                ${index === currentKey ? 'bg-yellow-300 border-2 border-yellow-500' : 
                  index === currentJ ? 'bg-red-300 border-2 border-red-500' : 
                  index < (sortingSteps[currentStep]?.sortedTill || 0) ? 'bg-green-200 border-2 border-green-500' : 
                  'bg-white border-2 border-gray-300'}
              `}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Step {currentStep} of {sortingSteps.length - 1}: {currentDescription}
        </div>
      </div>
      
      {/* Pseudocode */}
      <div className="bg-white p-4 rounded-md shadow mb-6 w-full">
        <h2 className="text-lg font-semibold mb-2 text-indigo-600">Insertion Sort Pseudocode</h2>
        <pre className="bg-gray-100 p-3 rounded text-sm font-mono">
{`InsertionSort(A):
  for i = 1 to A.length - 1:
    key = A[i]
    j = i - 1
    while j ≥ 0 and A[j] > key:
      A[j+1] = A[j]
      j = j - 1
    A[j+1] = key`}
        </pre>
      </div>
      
      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-3">
        <button 
          onClick={stepBackward} 
          disabled={currentStep <= 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300"
        >
          Previous
        </button>
        
        {isAnimating ? (
          <button 
            onClick={stopAnimation}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Stop
          </button>
        ) : (
          <button 
            onClick={startAnimation} 
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Play
          </button>
        )}
        
        <button 
          onClick={stepForward} 
          disabled={currentStep >= sortingSteps.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300"
        >
          Next
        </button>
        
        <button 
          onClick={resetArray}
          className="px-4 py-2 bg-gray-600 text-white rounded-md"
        >
          Reset
        </button>
      </div>
      
      {/* Speed control */}
      <div className="mt-4 w-full max-w-xs">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Animation Speed: {Math.round(2000/speed)} steps/sec
        </label>
        <input 
          type="range" 
          min="200" 
          max="2000" 
          step="50" 
          value={speed} 
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
