def missing_no(nums):
    
    expected_sum = sum(range(0, 101))
    given_sum = sum(nums)
    
    return expected_sum - given_sum