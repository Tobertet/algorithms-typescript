We define a pointer to the left of the array
We define a pointer to the right of the array
(If what I want to find is not exact) I find a pointer that will point to the value that meets the criteria

While left pointer <= right pointer
We define midPointer as leftPointer + round((right - left) / 2)
(If we hit [feasible function by finding monotonicity])
(If we look for an exact) return
(Else) we store the reference in the occurrencePointer and we know that the value is to the left (if ascending) or right (if descending)
(Else) We need to know if there can be Truthy values to the left. If there are, go there.
(Else) We need to know if there can be Truthy values to the right. If there are, go there.
