"use client";
import React, { useState, useEffect } from "react";

export default function HeapSortVisualizer() {
  const [array, setArray] = useState([90, 89, 56, 72, 67, 12, 21, 34, 45]);
  const [sortingSteps, setSortingSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [highlighted, setHighlighted] = useState({ indices: [], action: "" });

  // Generate sorting steps initially
  useEffect(() => {
    const steps = generateHeapSortSteps([...array]);
    setSortingSteps(steps);
  }, [array]);

  // Generate Heap Sort Steps
  const generateHeapSortSteps = (arr) => {
    const steps = [];
    const n = arr.length;

    // Helper function to heapify a subtree
    const heapify = (arr, n, i) => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }

      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        steps.push({
          array: [...arr],
          description: `Swap ${arr[largest]} with ${arr[i]} and heapify subtree rooted at index ${largest}`,
          indices: [i, largest],
          action: "swap",
        });
        heapify(arr, n, largest);
      } else {
        steps.push({
          array: [...arr],
          description: `Node at index ${i} is larger than its children. No swap needed.`,
          indices: [i],
          action: "heapify-check",
        });
      }
    };

    // Step 1: Build Max Heap
    steps.push({
      array: [...arr],
      description: "Start building Max Heap.",
      indices: [],
      action: "start-heap",
    });

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }

    steps.push({
      array: [...arr],
      description: "Max Heap built successfully!",
      indices: [],
      action: "heap-built",
    });

    // Step 2: Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      steps.push({
        array: [...arr],
        description: `Swap root ${arr[i]} with element ${arr[0]}. Heapify the root again.`,
        indices: [0, i],
        action: "swap-root",
      });

      heapify(arr, i, 0);
    }

    steps.push({
      array: [...arr],
      description: "Array is fully sorted!",
      indices: [],
      action: "sorted",
    });

    return steps;
  };

  // Start Animation
  const startAnimation = () => {
    if (currentStep >= sortingSteps.length - 1) {
      setCurrentStep(0);
    }
    setIsAnimating(true);
  };

  // Stop Animation
  const stopAnimation = () => {
    setIsAnimating(false);
  };

  // Step Forward
  const stepForward = () => {
    if (currentStep < sortingSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Step Backward
  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Reset
  const resetArray = () => {
    setIsAnimating(false);
    setCurrentStep(0);
    setArray([90, 89, 56, 72, 67, 12, 21, 34, 45]);
  };

  // Animation Effect
  useEffect(() => {
    let timer;
    if (isAnimating && currentStep < sortingSteps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, speed);
    } else if (currentStep >= sortingSteps.length - 1) {
      setIsAnimating(false);
    }
    return () => clearTimeout(timer);
  }, [isAnimating, currentStep, speed, sortingSteps.length]);

  const currentArray =
    currentStep < sortingSteps.length
      ? sortingSteps[currentStep].array
      : array;
  const currentDescription =
    currentStep < sortingSteps.length
      ? sortingSteps[currentStep].description
      : "";
  const currentIndices =
    currentStep < sortingSteps.length
      ? sortingSteps[currentStep].indices
      : [];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">
        Heap Sort Visualization
      </h1>

      {/* Array Display */}
      <div className="mb-8">
        <div className="flex justify-center mb-2 flex-wrap">
          {currentArray.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-12 h-12 m-1 text-lg font-bold rounded-md
                ${currentIndices.includes(index)
                  ? "bg-yellow-300 border-2 border-yellow-500"
                  : "bg-white border-2 border-gray-300"}
                sm:w-10 sm:h-10 sm:text-sm`}  
            >
              {item}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-700 mt-2 text-center">
          Step {currentStep} of {sortingSteps.length - 1}:{" "}
          <strong>{currentDescription}</strong>
        </div>
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

      {/* Speed Control */}
      <div className="mt-4 w-full max-w-xs">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Animation Speed: {Math.round(2000 / speed)} steps/sec
        </label>
        <input
          type="range"
          min="200"
          max="2000"
          step="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
