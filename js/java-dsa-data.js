// Master Java DSA Solved Program Bank for Digital Empowerment Bootcamp Powered By Kapil
// 25 Curated Data Structures & Algorithms Programs with Solved Examples and Complete Runnable Implementations

const JAVA_DSA_PROGRAMS = [
  {
    id: 1,
    title: "1. Two Sum (Optimal HashMap)",
    category: "Arrays & Hashing",
    difficulty: "Easy",
    problemStatement: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Each input has exactly one solution, and you may not use the same element twice.",
    constraints: "2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9",
    approach: "Instead of a brute-force O(N^2) double loop, use a HashMap to store each number and its index. For each element nums[i], compute complement = target - nums[i]. If complement already exists in the map, return [map.get(complement), i]. Otherwise, put nums[i] into the map.",
    timeComplexity: "O(N) — Single pass over the array",
    spaceComplexity: "O(N) — HashMap storing up to N elements",
    sampleInput: "nums = [2, 7, 11, 15], target = 9",
    expectedOutput: "[0, 1] (Explanation: nums[0] + nums[1] = 2 + 7 = 9)",
    tags: ["Array", "HashMap", "Two-Sum"],
    code: `import java.util.*;

public class Main {
    // Optimal Two-Sum using HashMap: O(N) Time | O(N) Space
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {}; // No solution found
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 1: TWO SUM (HASH MAP) ===");
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        System.out.println("Input Array: " + Arrays.toString(nums));
        System.out.println("Target Sum: " + target);

        int[] result = twoSum(nums, target);
        System.out.println("Result Indices: [" + result[0] + ", " + result[1] + "]");
        System.out.println("Verification: nums[" + result[0] + "] (" + nums[result[0]] + ") + nums[" + result[1] + "] (" + nums[result[1]] + ") = " + (nums[result[0]] + nums[result[1]]));
    }
}`
  },
  {
    id: 2,
    title: "2. Maximum Subarray Sum (Kadane's Algorithm)",
    category: "Arrays",
    difficulty: "Medium",
    problemStatement: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    constraints: "1 <= nums.length <= 10^5, -10^4 <= nums[i] <= 10^4",
    approach: "Kadane's Algorithm maintains two variables: currentSum and maxSum. Iterate through the array; at each element, decide whether to add nums[i] to currentSum or start a fresh subarray at nums[i]: currentSum = Math.max(nums[i], currentSum + nums[i]). Update maxSum = Math.max(maxSum, currentSum).",
    timeComplexity: "O(N) — Single linear pass",
    spaceComplexity: "O(1) — Constant memory",
    sampleInput: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
    expectedOutput: "6 (Contiguous subarray [4, -1, 2, 1] has largest sum 6)",
    tags: ["Array", "Dynamic Programming", "Kadane's"],
    code: `import java.util.*;

public class Main {
    // Kadane's Algorithm: O(N) Time | O(1) Space
    public static int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 2: KADANE'S ALGORITHM ===");
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Input Array: " + Arrays.toString(nums));

        int max = maxSubArray(nums);
        System.out.println("Maximum Contiguous Subarray Sum: " + max);
        System.out.println("Optimal Subarray: [4, -1, 2, 1] -> Sum = 6");
    }
}`
  },
  {
    id: 3,
    title: "3. Reverse an Array In-Place (Two Pointers)",
    category: "Arrays",
    difficulty: "Easy",
    problemStatement: "Reverse the elements of an integer array in-place without allocating a secondary array.",
    constraints: "1 <= nums.length <= 10^5",
    approach: "Initialize two pointers: left = 0 and right = nums.length - 1. In a while loop (left < right), swap nums[left] and nums[right], increment left, and decrement right.",
    timeComplexity: "O(N) — Swaps N/2 pairs",
    spaceComplexity: "O(1) — Zero auxiliary allocation",
    sampleInput: "nums = [10, 20, 30, 40, 50]",
    expectedOutput: "[50, 40, 30, 20, 10]",
    tags: ["Array", "Two-Pointers", "In-Place"],
    code: `import java.util.*;

public class Main {
    // In-Place Array Reversal: O(N) Time | O(1) Space
    public static void reverseArray(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 3: REVERSE ARRAY IN-PLACE ===");
        int[] nums = {10, 20, 30, 40, 50};
        System.out.println("Original Array: " + Arrays.toString(nums));

        reverseArray(nums);
        System.out.println("Reversed Array: " + Arrays.toString(nums));
    }
}`
  },
  {
    id: 4,
    title: "4. Move Zeroes to End",
    category: "Arrays",
    difficulty: "Easy",
    problemStatement: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Must be done in-place.",
    constraints: "1 <= nums.length <= 10^5, -2^31 <= nums[i] <= 2^31 - 1",
    approach: "Use a slow-pointer 'insertPos'. Iterate through the array; whenever nums[i] != 0, write it to nums[insertPos++] and advance. After finishing the loop, fill the remaining indices from insertPos to nums.length - 1 with 0.",
    timeComplexity: "O(N) — Linear traversal",
    spaceComplexity: "O(1) — In-place mutation",
    sampleInput: "nums = [0, 1, 0, 3, 12]",
    expectedOutput: "[1, 3, 12, 0, 0]",
    tags: ["Array", "Two-Pointers"],
    code: `import java.util.*;

public class Main {
    // Move Zeroes: O(N) Time | O(1) Space
    public static void moveZeroes(int[] nums) {
        int insertPos = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[insertPos++] = nums[i];
            }
        }
        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 4: MOVE ZEROES TO END ===");
        int[] nums = {0, 1, 0, 3, 12};
        System.out.println("Original: " + Arrays.toString(nums));

        moveZeroes(nums);
        System.out.println("Result:   " + Arrays.toString(nums));
    }
}`
  },
  {
    id: 5,
    title: "5. Find the Duplicate Number (Floyd's Tortoise & Hare)",
    category: "Arrays",
    difficulty: "Medium",
    problemStatement: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number. Find the duplicate without modifying the array and using only O(1) extra space.",
    constraints: "1 <= n <= 10^5, nums.length == n + 1",
    approach: "Treat the array as a linked list where nums[i] points to node nums[i]. Because of the duplicate value, a cycle must exist. Phase 1: slow = nums[slow], fast = nums[nums[fast]] until they collide. Phase 2: reset slow = nums[0], advance both one step at a time until they meet at the cycle entrance.",
    timeComplexity: "O(N) — Floyd's cycle detection",
    spaceComplexity: "O(1) — No extra storage",
    sampleInput: "nums = [1, 3, 4, 2, 2]",
    expectedOutput: "2 (Duplicate value identified)",
    tags: ["Array", "Cycle-Detection", "Two-Pointers"],
    code: `import java.util.*;

public class Main {
    // Floyd's Cycle Finding: O(N) Time | O(1) Space
    public static int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[0];

        // Phase 1: Detect intersection in cycle
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);

        // Phase 2: Find entrance to cycle
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 5: FIND DUPLICATE NUMBER ===");
        int[] nums = {1, 3, 4, 2, 2};
        System.out.println("Input Array: " + Arrays.toString(nums));

        int duplicate = findDuplicate(nums);
        System.out.println("Detected Duplicate Number: " + duplicate);
    }
}`
  },
  {
    id: 6,
    title: "6. Valid Palindrome (Two Pointers)",
    category: "Strings",
    difficulty: "Easy",
    problemStatement: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
    constraints: "1 <= s.length <= 2 * 10^5",
    approach: "Use two pointers, left starting at 0 and right at s.length() - 1. While left < right, skip non-alphanumeric characters using Character.isLetterOrDigit(). Then compare Character.toLowerCase(s.charAt(left)) with Character.toLowerCase(s.charAt(right)). If mismatched, return false.",
    timeComplexity: "O(N) — Single pass over string",
    spaceComplexity: "O(1) — No string copy created",
    sampleInput: "s = \"A man, a plan, a canal: Panama\"",
    expectedOutput: "true (Cleaned string: \"amanaplanacanalpanama\")",
    tags: ["String", "Two-Pointers"],
    code: `public class Main {
    // Valid Palindrome: O(N) Time | O(1) Space
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;

            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 6: VALID PALINDROME ===");
        String s = "A man, a plan, a canal: Panama";
        System.out.println("Input String: \\"" + s + "\\"");

        boolean result = isPalindrome(s);
        System.out.println("Is Palindrome? " + result);
    }
}`
  },
  {
    id: 7,
    title: "7. Longest Substring Without Repeating Characters",
    category: "Strings",
    difficulty: "Medium",
    problemStatement: "Given a string s, find the length of the longest substring without repeating characters.",
    constraints: "0 <= s.length <= 5 * 10^4",
    approach: "Sliding window technique with a HashMap tracking the most recent index of each character. Left pointer 'left' defines window start; right pointer 'right' expands the window. When a repeated character is encountered at index right, jump left = Math.max(left, lastSeenIndex + 1). Max length is updated at each step.",
    timeComplexity: "O(N) — Each character visited at most twice",
    spaceComplexity: "O(min(N, M)) — Map size bounded by alphabet size",
    sampleInput: "s = \"abcabcbb\"",
    expectedOutput: "3 (The longest substring is \"abc\" with length 3)",
    tags: ["String", "Sliding-Window", "HashMap"],
    code: `import java.util.*;

public class Main {
    // Longest Substring: O(N) Time | O(min(N, Sigma)) Space
    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charMap = new HashMap<>();
        int maxLength = 0;
        int left = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (charMap.containsKey(c)) {
                left = Math.max(left, charMap.get(c) + 1);
            }
            charMap.put(c, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 7: LONGEST SUBSTRING WITHOUT REPEATS ===");
        String s = "abcabcbb";
        System.out.println("Input: \\"" + s + "\\"");

        int len = lengthOfLongestSubstring(s);
        System.out.println("Longest Non-Repeating Substring Length: " + len);
    }
}`
  },
  {
    id: 8,
    title: "8. Valid Anagram (Frequency Array)",
    category: "Strings",
    difficulty: "Easy",
    problemStatement: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word formed by rearranging the letters of a different word, typically using all the original letters exactly once.",
    constraints: "1 <= s.length, t.length <= 5 * 10^4",
    approach: "If lengths differ, return false immediately. Allocate an integer frequency array of size 26 (for lowercase English letters). Loop through s and t simultaneously: increment count for s.charAt(i) and decrement for t.charAt(i). Check if all counts in the array are 0.",
    timeComplexity: "O(N) — Single pass over strings",
    spaceComplexity: "O(1) — Fixed 26-element array",
    sampleInput: "s = \"anagram\", t = \"nagaram\"",
    expectedOutput: "true (Identical character frequencies)",
    tags: ["String", "Array", "Hashing"],
    code: `public class Main {
    // Valid Anagram: O(N) Time | O(1) Space
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        int[] counts = new int[26];
        for (int i = 0; i < s.length(); i++) {
            counts[s.charAt(i) - 'a']++;
            counts[t.charAt(i) - 'a']--;
        }

        for (int c : counts) {
            if (c != 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 8: VALID ANAGRAM ===");
        String s = "anagram", t = "nagaram";
        System.out.println("String S: " + s);
        System.out.println("String T: " + t);

        boolean result = isAnagram(s, t);
        System.out.println("Are Anagrams? " + result);
    }
}`
  },
  {
    id: 9,
    title: "9. Reverse Words in a String",
    category: "Strings",
    difficulty: "Medium",
    problemStatement: "Given an input string s, reverse the order of the words. Return a string of the words in reverse order concatenated by a single space, removing multiple and surrounding spaces.",
    constraints: "1 <= s.length <= 10^4",
    approach: "Split the trimmed string using regex '\\\\s+' to collapse consecutive whitespace into word tokens. Traverse the tokens array from end to start and concatenate into a StringBuilder separated by single spaces.",
    timeComplexity: "O(N) — Linear scan and split",
    spaceComplexity: "O(N) — Stores tokens and output string",
    sampleInput: "s = \"  the sky   is blue  \"",
    expectedOutput: "\"blue is sky the\"",
    tags: ["String", "Two-Pointers"],
    code: `public class Main {
    // Reverse Words: O(N) Time | O(N) Space
    public static String reverseWords(String s) {
        String[] words = s.trim().split("\\\\s+");
        StringBuilder sb = new StringBuilder();

        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]);
            if (i > 0) sb.append(" ");
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 9: REVERSE WORDS IN A STRING ===");
        String s = "  the sky   is blue  ";
        System.out.println("Original: \\"" + s + "\\"");

        String reversed = reverseWords(s);
        System.out.println("Reversed: \\"" + reversed + "\\"");
    }
}`
  },
  {
    id: 10,
    title: "10. Binary Search (Iterative & Recursive)",
    category: "Searching & Sorting",
    difficulty: "Easy",
    problemStatement: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums in O(log N) time. Return its index or -1 if not found.",
    constraints: "1 <= nums.length <= 10^4, -10^4 < nums[i], target < 10^4",
    approach: "Maintain search boundaries low and high. Compute mid = low + (high - low) / 2 to avoid integer overflow. If nums[mid] == target, return mid. If nums[mid] < target, search right half (low = mid + 1). Otherwise, search left half (high = mid - 1).",
    timeComplexity: "O(log N) — Search space halved each iteration",
    spaceComplexity: "O(1) — Iterative version uses zero extra memory",
    sampleInput: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
    expectedOutput: "4 (nums[4] == 9)",
    tags: ["Binary Search", "Searching"],
    code: `import java.util.*;

public class Main {
    // Iterative Binary Search: O(log N) Time | O(1) Space
    public static int binarySearch(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 10: BINARY SEARCH ===");
        int[] nums = {-1, 0, 3, 5, 9, 12};
        int target = 9;

        System.out.println("Sorted Array: " + Arrays.toString(nums));
        System.out.println("Target: " + target);

        int index = binarySearch(nums, target);
        System.out.println("Target Index Found: " + index + " (Zero-based)");
    }
}`
  },
  {
    id: 11,
    title: "11. Search in Rotated Sorted Array",
    category: "Searching & Sorting",
    difficulty: "Medium",
    problemStatement: "There is an integer array nums sorted in ascending order with distinct values, rotated at an unknown pivot index. Given target, return the index of target if it is in nums, or -1 if it is not.",
    constraints: "1 <= nums.length <= 5000, -10^4 <= nums[i] <= 10^4",
    approach: "In a rotated sorted array, at least one half (left or right of mid) is always normally sorted! Compute mid. If nums[low] <= nums[mid], the left half is sorted: check if target falls in [nums[low], nums[mid]]. Otherwise, the right half is sorted: check if target falls in [nums[mid], nums[high]]. Adjust low/high accordingly.",
    timeComplexity: "O(log N) — Modified binary search",
    spaceComplexity: "O(1) — Constant memory",
    sampleInput: "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
    expectedOutput: "4 (Target 0 is at index 4)",
    tags: ["Binary Search", "Array"],
    code: `import java.util.*;

public class Main {
    // Search in Rotated Array: O(log N) Time | O(1) Space
    public static int searchRotated(int[] nums, int target) {
        int low = 0, high = nums.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;

            // Check if left half is sorted
            if (nums[low] <= nums[mid]) {
                if (target >= nums[low] && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else { // Right half is sorted
                if (target > nums[mid] && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 11: SEARCH ROTATED SORTED ARRAY ===");
        int[] nums = {4, 5, 6, 7, 0, 1, 2};
        int target = 0;

        System.out.println("Rotated Array: " + Arrays.toString(nums));
        System.out.println("Target: " + target);

        int index = searchRotated(nums, target);
        System.out.println("Found at Index: " + index);
    }
}`
  },
  {
    id: 12,
    title: "12. Merge Sort (Divide & Conquer)",
    category: "Searching & Sorting",
    difficulty: "Medium",
    problemStatement: "Given an array of integers, sort the array in ascending order using the Merge Sort algorithm with guaranteed O(N log N) time complexity.",
    constraints: "1 <= nums.length <= 5 * 10^4",
    approach: "Divide the array recursively into two equal halves until subarray length is 1 (base case). Then merge the two sorted halves back together in linear time using a temporary buffer array.",
    timeComplexity: "O(N log N) — In all cases (best, average, worst)",
    spaceComplexity: "O(N) — Auxiliary buffer for merging",
    sampleInput: "nums = [38, 27, 43, 3, 9, 82, 10]",
    expectedOutput: "[3, 9, 10, 27, 38, 43, 82]",
    tags: ["Merge Sort", "Divide-and-Conquer", "Sorting"],
    code: `import java.util.*;

public class Main {
    // Merge Sort: O(N log N) Time | O(N) Space
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        System.arraycopy(arr, left, L, 0, n1);
        System.arraycopy(arr, mid + 1, R, 0, n2);

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) arr[k++] = L[i++];
            else arr[k++] = R[j++];
        }
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 12: MERGE SORT ===");
        int[] nums = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Unsorted Array: " + Arrays.toString(nums));

        mergeSort(nums, 0, nums.length - 1);
        System.out.println("Sorted Array:   " + Arrays.toString(nums));
    }
}`
  },
  {
    id: 13,
    title: "13. Quick Sort (In-Place Partitioning)",
    category: "Searching & Sorting",
    difficulty: "Medium",
    problemStatement: "Sort an integer array in-place in ascending order using Quick Sort with Lomuto partitioning scheme.",
    constraints: "1 <= nums.length <= 5 * 10^4",
    approach: "Pick the last element as pivot. Use pointer i starting at low - 1. For each j from low to high - 1, if arr[j] < pivot, increment i and swap arr[i] with arr[j]. Finally swap arr[i + 1] with arr[high] (pivot). Recursively apply quicksort to left and right partitions.",
    timeComplexity: "O(N log N) average | O(N^2) worst case",
    spaceComplexity: "O(log N) — Call stack depth",
    sampleInput: "nums = [10, 80, 30, 90, 40, 50, 70]",
    expectedOutput: "[10, 30, 40, 50, 70, 80, 90]",
    tags: ["Quick Sort", "Partitioning", "Sorting"],
    code: `import java.util.*;

public class Main {
    // Quick Sort: O(N log N) avg | O(log N) stack
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 13: QUICK SORT ===");
        int[] nums = {10, 80, 30, 90, 40, 50, 70};
        System.out.println("Unsorted: " + Arrays.toString(nums));

        quickSort(nums, 0, nums.length - 1);
        System.out.println("Sorted:   " + Arrays.toString(nums));
    }
}`
  },
  {
    id: 14,
    title: "14. Singly Linked List Implementation",
    category: "Linked Lists",
    difficulty: "Easy",
    problemStatement: "Implement a Singly Linked List class in Java supporting insertAtHead, insertAtTail, deleteNode, and display methods.",
    constraints: "Node values are integers",
    approach: "Define a static Node class with data and next pointer. The LinkedList maintains a head pointer. insertAtHead creates node pointing to current head. insertAtTail traverses to end and appends. deleteNode traverses to target value and bypasses it.",
    timeComplexity: "O(1) insertAtHead | O(N) insertAtTail, delete, display",
    spaceComplexity: "O(N) — N allocated nodes",
    sampleInput: "Insert 10, 20, 30; Delete 20",
    expectedOutput: "10 -> 30 -> null",
    tags: ["Linked List", "Data Structure"],
    code: `public class Main {
    static class Node {
        int data;
        Node next;
        Node(int val) { this.data = val; this.next = null; }
    }

    static class SinglyLinkedList {
        Node head;

        public void insertAtHead(int val) {
            Node newNode = new Node(val);
            newNode.next = head;
            head = newNode;
        }

        public void insertAtTail(int val) {
            Node newNode = new Node(val);
            if (head == null) { head = newNode; return; }
            Node curr = head;
            while (curr.next != null) curr = curr.next;
            curr.next = newNode;
        }

        public void deleteNode(int val) {
            if (head == null) return;
            if (head.data == val) { head = head.next; return; }
            Node curr = head;
            while (curr.next != null && curr.next.data != val) curr = curr.next;
            if (curr.next != null) curr.next = curr.next.next;
        }

        public void display() {
            Node curr = head;
            while (curr != null) {
                System.out.print(curr.data + " -> ");
                curr = curr.next;
            }
            System.out.println("null");
        }
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 14: SINGLY LINKED LIST ===");
        SinglyLinkedList list = new SinglyLinkedList();
        list.insertAtTail(10);
        list.insertAtTail(20);
        list.insertAtTail(30);
        list.insertAtHead(5);

        System.out.print("Created List: ");
        list.display();

        System.out.println("Deleting node with value 20...");
        list.deleteNode(20);

        System.out.print("Updated List: ");
        list.display();
    }
}`
  },
  {
    id: 15,
    title: "15. Reverse a Singly Linked List",
    category: "Linked Lists",
    difficulty: "Easy",
    problemStatement: "Given the head of a singly linked list, reverse the list, and return the reversed list head.",
    constraints: "Number of nodes is in range [0, 5000]",
    approach: "Use three pointers: prev (initially null), curr (initially head), and next. In a loop, save next = curr.next, reverse the link curr.next = prev, advance prev = curr, and advance curr = next. When curr reaches null, prev is the new head.",
    timeComplexity: "O(N) — Single pass through list",
    spaceComplexity: "O(1) — Constant memory in-place pointer reversal",
    sampleInput: "1 -> 2 -> 3 -> 4 -> 5 -> null",
    expectedOutput: "5 -> 4 -> 3 -> 2 -> 1 -> null",
    tags: ["Linked List", "In-Place", "Pointers"],
    code: `public class Main {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    // Reverse Linked List: O(N) Time | O(1) Space
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    public static void printList(ListNode head) {
        ListNode curr = head;
        while (curr != null) {
            System.out.print(curr.val + " -> ");
            curr = curr.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 15: REVERSE LINKED LIST ===");
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        System.out.print("Original List: ");
        printList(head);

        ListNode reversed = reverseList(head);
        System.out.print("Reversed List: ");
        printList(reversed);
    }
}`
  },
  {
    id: 16,
    title: "16. Detect Cycle in Linked List (Floyd's Tortoise & Hare)",
    category: "Linked Lists",
    difficulty: "Easy",
    problemStatement: "Given head, the head of a linked list, determine if the linked list has a cycle in it without using extra memory.",
    constraints: "Number of nodes is in range [0, 10^4]",
    approach: "Floyd's Cycle-Finding Algorithm uses two pointers: slow moves 1 step at a time, fast moves 2 steps at a time. If the list contains a cycle, fast will eventually lap and meet slow. If fast or fast.next reaches null, there is no cycle.",
    timeComplexity: "O(N) — Linear traversal",
    spaceComplexity: "O(1) — Two pointer variables",
    sampleInput: "3 -> 2 -> 0 -> -4 -> (points back to 2)",
    expectedOutput: "true (Cycle detected)",
    tags: ["Linked List", "Two-Pointers", "Cycle-Detection"],
    code: `public class Main {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    // Floyd's Cycle Detection: O(N) Time | O(1) Space
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 16: DETECT CYCLE IN LINKED LIST ===");
        ListNode head = new ListNode(3);
        ListNode node2 = new ListNode(2);
        ListNode node0 = new ListNode(0);
        ListNode node4 = new ListNode(-4);

        head.next = node2;
        node2.next = node0;
        node0.next = node4;
        node4.next = node2; // Creates cycle back to node 2

        boolean cycle = hasCycle(head);
        System.out.println("Cycle Detected in Linked List? " + cycle);
    }
}`
  },
  {
    id: 17,
    title: "17. Merge Two Sorted Linked Lists",
    category: "Linked Lists",
    difficulty: "Easy",
    problemStatement: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list by splicing together the nodes of the first two lists.",
    constraints: "Number of nodes in both lists is in range [0, 50]",
    approach: "Create a dummy head node. Compare list1.val with list2.val. Attach the smaller node to tail.next and advance that list. Once one list is exhausted, attach the remainder of the other list directly to tail.next. Return dummy.next.",
    timeComplexity: "O(N + M) — Traverses each node once",
    spaceComplexity: "O(1) — Splices existing node pointers",
    sampleInput: "L1: 1 -> 2 -> 4; L2: 1 -> 3 -> 4",
    expectedOutput: "1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null",
    tags: ["Linked List", "Recursion", "Merge"],
    code: `public class Main {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    // Merge Two Sorted Lists: O(N + M) Time | O(1) Space
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        tail.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }

    public static void printList(ListNode head) {
        ListNode curr = head;
        while (curr != null) {
            System.out.print(curr.val + " -> ");
            curr = curr.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 17: MERGE TWO SORTED LINKED LISTS ===");
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        System.out.print("List 1: "); printList(l1);
        System.out.print("List 2: "); printList(l2);

        ListNode merged = mergeTwoLists(l1, l2);
        System.out.print("Merged: "); printList(merged);
    }
}`
  },
  {
    id: 18,
    title: "18. Valid Parentheses Matching (Stack)",
    category: "Stacks & Queues",
    difficulty: "Easy",
    problemStatement: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets in correct order.",
    constraints: "1 <= s.length <= 10^4",
    approach: "Use a Stack<Character>. Iterate through characters: when encountering an opening bracket '(', '{', '[', push its matching closing bracket ')', '}', ']' onto the stack. When encountering a closing bracket, pop from the stack and verify it matches the current character. String is valid if stack is empty at end.",
    timeComplexity: "O(N) — Single pass over characters",
    spaceComplexity: "O(N) — Stack stores up to N brackets",
    sampleInput: "s = \"()[]{}\"",
    expectedOutput: "true (All pairs matched in correct order)",
    tags: ["Stack", "String"],
    code: `import java.util.*;

public class Main {
    // Valid Parentheses: O(N) Time | O(N) Space
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 18: VALID PARENTHESES (STACK) ===");
        String s1 = "()[]{}";
        String s2 = "([)]";

        System.out.println("Expression 1: \\"" + s1 + "\\" -> Valid? " + isValid(s1));
        System.out.println("Expression 2: \\"" + s2 + "\\" -> Valid? " + isValid(s2));
    }
}`
  },
  {
    id: 19,
    title: "19. Next Greater Element (Monotonic Stack)",
    category: "Stacks & Queues",
    difficulty: "Medium",
    problemStatement: "Given an array of integers arr, find the next greater element for each element. The next greater element of an element x is the first greater element to its right. If none exists, return -1.",
    constraints: "1 <= arr.length <= 10^5",
    approach: "Traverse the array from right to left while maintaining a monotonic decreasing stack. For each element arr[i], pop from stack while stack is not empty and stack.peek() <= arr[i]. If stack is empty, next greater is -1; otherwise, it is stack.peek(). Then push arr[i] onto stack.",
    timeComplexity: "O(N) — Each element pushed and popped at most once",
    spaceComplexity: "O(N) — Stack storage",
    sampleInput: "arr = [4, 5, 2, 25]",
    expectedOutput: "[5, 25, 25, -1]",
    tags: ["Monotonic Stack", "Stack", "Array"],
    code: `import java.util.*;

public class Main {
    // Next Greater Element: O(N) Time | O(N) Space
    public static int[] nextGreaterElement(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= arr[i]) {
                stack.pop();
            }
            result[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(arr[i]);
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 19: NEXT GREATER ELEMENT ===");
        int[] arr = {4, 5, 2, 25};
        System.out.println("Input Array: " + Arrays.toString(arr));

        int[] nge = nextGreaterElement(arr);
        System.out.println("Next Greater: " + Arrays.toString(nge));
    }
}`
  },
  {
    id: 20,
    title: "20. Implement Queue using Stacks",
    category: "Stacks & Queues",
    difficulty: "Medium",
    problemStatement: "Implement a first in first out (FIFO) queue using only two standard LIFO stacks. Implement push, pop, peek, and empty operations.",
    constraints: "At most 100 calls will be made to push, pop, peek, and empty",
    approach: "Use two stacks: inStack (for push operations) and outStack (for pop/peek operations). push(x) simply pushes to inStack. For pop() and peek(), if outStack is empty, transfer all elements from inStack to outStack (reversing their order to FIFO).",
    timeComplexity: "Amortized O(1) for all operations",
    spaceComplexity: "O(N) — Stores N elements across stacks",
    sampleInput: "push(1), push(2), peek(), pop(), empty()",
    expectedOutput: "peek = 1, pop = 1, empty = false",
    tags: ["Stack", "Queue", "Design"],
    code: `import java.util.*;

public class Main {
    static class MyQueue {
        private Stack<Integer> inStack = new Stack<>();
        private Stack<Integer> outStack = new Stack<>();

        public void push(int x) {
            inStack.push(x);
        }

        public int pop() {
            peek();
            return outStack.pop();
        }

        public int peek() {
            if (outStack.isEmpty()) {
                while (!inStack.isEmpty()) {
                    outStack.push(inStack.pop());
                }
            }
            return outStack.peek();
        }

        public boolean empty() {
            return inStack.isEmpty() && outStack.isEmpty();
        }
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 20: QUEUE USING TWO STACKS ===");
        MyQueue queue = new MyQueue();
        queue.push(10);
        queue.push(20);
        queue.push(30);

        System.out.println("Front Element (peek): " + queue.peek()); // 10
        System.out.println("Dequeued Element (pop): " + queue.pop()); // 10
        System.out.println("New Front Element: " + queue.peek());     // 20
        System.out.println("Is Queue Empty? " + queue.empty());       // false
    }
}`
  },
  {
    id: 21,
    title: "21. Fibonacci Numbers (Memoization & Tabulation)",
    category: "Dynamic Programming",
    difficulty: "Easy",
    problemStatement: "Compute the N-th Fibonacci number. Implement both Top-Down Memoization and Bottom-Up Tabulation to eliminate exponential O(2^N) overhead.",
    constraints: "0 <= n <= 45",
    approach: "Naive recursion has O(2^N) overlapping subproblems. Memoization caches results in an array dp[N]. Tabulation computes iteratively from base cases dp[0]=0, dp[1]=1 up to dp[N]. Space-optimized approach uses only two variables prev1 and prev2.",
    timeComplexity: "O(N) — Linear time",
    spaceComplexity: "O(1) — Constant space in optimized version",
    sampleInput: "n = 10",
    expectedOutput: "55 (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)",
    tags: ["Dynamic Programming", "Recursion", "Memoization"],
    code: `public class Main {
    // Dynamic Programming Tabulation: O(N) Time | O(1) Space
    public static int fibTabulation(int n) {
        if (n <= 1) return n;
        int prev2 = 0, prev1 = 1;
        for (int i = 2; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 21: FIBONACCI (DYNAMIC PROGRAMMING) ===");
        int n = 10;
        System.out.println("Calculating Fibonacci for N = " + n);

        int result = fibTabulation(n);
        System.out.println("Fibonacci(" + n + ") = " + result);
    }
}`
  },
  {
    id: 22,
    title: "22. Binary Tree Traversals (Inorder, Preorder, Postorder)",
    category: "Trees",
    difficulty: "Easy",
    problemStatement: "Implement Depth-First Search tree traversals on a Binary Tree: Inorder (Left, Root, Right), Preorder (Root, Left, Right), and Postorder (Left, Right, Root).",
    constraints: "Number of nodes is in range [0, 100]",
    approach: "Use recursive visits. Inorder visits left subtree, prints root, visits right subtree. Preorder prints root first. Postorder visits both subtrees before printing root.",
    timeComplexity: "O(N) — Each node visited once",
    spaceComplexity: "O(H) — Recursion stack where H is tree height",
    sampleInput: "Tree: 1 -> Left: 2, Right: 3 -> 2 has Left: 4, Right: 5",
    expectedOutput: "Inorder: [4, 2, 5, 1, 3], Preorder: [1, 2, 4, 5, 3], Postorder: [4, 5, 2, 3, 1]",
    tags: ["Tree", "DFS", "Traversal"],
    code: `public class Main {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public static void inorder(TreeNode root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }

    public static void preorder(TreeNode root) {
        if (root == null) return;
        System.out.print(root.val + " ");
        preorder(root.left);
        preorder(root.right);
    }

    public static void postorder(TreeNode root) {
        if (root == null) return;
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.val + " ");
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 22: BINARY TREE TRAVERSALS ===");
        // Construct Tree:
        //        1
        //       / \\
        //      2   3
        //     / \\
        //    4   5
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        System.out.print("Inorder Traversal   (L-Root-R): "); inorder(root); System.out.println();
        System.out.print("Preorder Traversal  (Root-L-R): "); preorder(root); System.out.println();
        System.out.print("Postorder Traversal (L-R-Root): "); postorder(root); System.out.println();
    }
}`
  },
  {
    id: 23,
    title: "23. Maximum Depth / Height of Binary Tree",
    category: "Trees",
    difficulty: "Easy",
    problemStatement: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    constraints: "Number of nodes in tree is in range [0, 10^4]",
    approach: "Recursive Depth-First Search: Base case: if root == null, return 0. Recursively calculate left depth and right depth: return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)).",
    timeComplexity: "O(N) — Visits every node once",
    spaceComplexity: "O(H) — Height of tree stack space",
    sampleInput: "Tree: Root: 3, Left: 9, Right: 20 (Right has children 15, 7)",
    expectedOutput: "3 (Path: 3 -> 20 -> 15)",
    tags: ["Tree", "DFS", "Recursion"],
    code: `public class Main {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    // Max Depth: O(N) Time | O(H) Space
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        return 1 + Math.max(leftDepth, rightDepth);
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 23: MAX DEPTH OF BINARY TREE ===");
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        int depth = maxDepth(root);
        System.out.println("Maximum Tree Depth: " + depth);
    }
}`
  },
  {
    id: 24,
    title: "24. Lowest Common Ancestor in BST",
    category: "Trees",
    difficulty: "Medium",
    problemStatement: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes p and q in the BST.",
    constraints: "Number of nodes in tree is in range [2, 10^5]. All Node.val are unique.",
    approach: "Leverage the BST ordering property! If both p.val and q.val are smaller than root.val, the LCA must reside in the left subtree. If both are greater than root.val, the LCA must reside in the right subtree. If one is smaller and one is greater (or one equals root.val), the current root is the LCA split point!",
    timeComplexity: "O(H) — Height of BST (O(log N) for balanced)",
    spaceComplexity: "O(1) — Iterative traversal",
    sampleInput: "BST with root 6, p = 2, q = 8",
    expectedOutput: "6 (Root 6 is the lowest common ancestor)",
    tags: ["BST", "Tree", "LCA"],
    code: `public class Main {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    // LCA in BST: O(H) Time | O(1) Space
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode curr = root;
        while (curr != null) {
            if (p.val < curr.val && q.val < curr.val) {
                curr = curr.left;
            } else if (p.val > curr.val && q.val > curr.val) {
                curr = curr.right;
            } else {
                return curr; // Split point found!
            }
        }
        return null;
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 24: LOWEST COMMON ANCESTOR IN BST ===");
        TreeNode root = new TreeNode(6);
        root.left = new TreeNode(2);
        root.right = new TreeNode(8);
        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(7);
        root.right.right = new TreeNode(9);

        TreeNode p = root.left;       // Node 2
        TreeNode q = root.left.right; // Node 4

        TreeNode lca = lowestCommonAncestor(root, p, q);
        System.out.println("LCA of " + p.val + " and " + q.val + " is: Node " + lca.val);
    }
}`
  },
  {
    id: 25,
    title: "25. Graph Traversals (Breadth-First & Depth-First Search)",
    category: "Graphs",
    difficulty: "Medium",
    problemStatement: "Implement an adjacency list graph representation in Java and implement both Breadth-First Search (BFS) and Depth-First Search (DFS) traversals starting from a source vertex.",
    constraints: "Vertices numbered 0 to V - 1",
    approach: "Represent graph with List<List<Integer>>. For BFS: use a Queue and visited[] boolean array; dequeue vertex, explore unvisited neighbors, enqueue them. For DFS: use recursion and visited[] boolean array; print current vertex, mark visited, recurse for unvisited neighbors.",
    timeComplexity: "O(V + E) — Visits all vertices and edges",
    spaceComplexity: "O(V) — Visited array and queue/call stack",
    sampleInput: "Graph with 5 vertices (0 to 4), edges: 0-1, 0-2, 1-3, 2-4",
    expectedOutput: "BFS: 0 1 2 3 4 | DFS: 0 1 3 2 4",
    tags: ["Graph", "BFS", "DFS"],
    code: `import java.util.*;

public class Main {
    static class Graph {
        int V;
        List<List<Integer>> adj;

        Graph(int v) {
            this.V = v;
            adj = new ArrayList<>();
            for (int i = 0; i < v; i++) adj.add(new ArrayList<>());
        }

        void addEdge(int u, int v) {
            adj.get(u).add(v);
            adj.get(v).add(u); // Undirected graph
        }

        void bfs(int start) {
            boolean[] visited = new boolean[V];
            Queue<Integer> queue = new LinkedList<>();

            visited[start] = true;
            queue.offer(start);

            while (!queue.isEmpty()) {
                int u = queue.poll();
                System.out.print(u + " ");

                for (int v : adj.get(u)) {
                    if (!visited[v]) {
                        visited[v] = true;
                        queue.offer(v);
                    }
                }
            }
        }

        void dfs(int start) {
            boolean[] visited = new boolean[V];
            dfsUtil(start, visited);
        }

        private void dfsUtil(int u, boolean[] visited) {
            visited[u] = true;
            System.out.print(u + " ");

            for (int v : adj.get(u)) {
                if (!visited[v]) {
                    dfsUtil(v, visited);
                }
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("=== PROGRAM 25: GRAPH BFS AND DFS ===");
        Graph g = new Graph(5);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 4);

        System.out.print("Breadth-First Search (BFS) from node 0: ");
        g.bfs(0);
        System.out.println();

        System.out.print("Depth-First Search (DFS) from node 0:   ");
        g.dfs(0);
        System.out.println();
    }
}`
  }
];

if (typeof module !== 'undefined') { module.exports = JAVA_DSA_PROGRAMS; }
