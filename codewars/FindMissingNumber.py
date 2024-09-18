def missing_no(nums):
    
    expected_sum = sum(range(0, 101)) # time complexity O(n) -> n = 101
    given_sum = sum(nums)             # time complexity O(n) -> n = len(nums)
    
    return expected_sum - given_sum   # time complexity O(1)  --- TOTAL TIME COMPLEXITY: O(n)