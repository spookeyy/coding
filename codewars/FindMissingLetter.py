def find_missing_letter(chars):
    asc_value = [ord(i) for i in chars]
    print("asc_value", asc_value)

    begin = asc_value[0]
    end = asc_value[-1]
    # print("begin", begin, "end", end)
    
    expected_sum = sum(range(begin, end+1)) 
    chars_sum = sum(asc_value)
    print("expected", expected_sum, "chars_sum", chars_sum)

    # print(chr(expected_sum - chars_sum))
    
    return chr(expected_sum - chars_sum)


find_missing_letter(['a','b','c','d','f'])

