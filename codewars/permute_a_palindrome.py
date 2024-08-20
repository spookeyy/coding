# solution
def permute_a_palindrome(input):
    char_count = {}
    count_odd_char = 0

    for char in input:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
            count_odd_char = (char_count[char]) % 2 - (char_count[char] - 1) % 2
    return count_odd_char <= 1


# solution  (2)
def permute_a_palindrome(input):
    return sum([1 for i in set(input) if input.count(i) % 2]) < 2

print(permute_a_palindrome('tactcoa')) # True

# easy solution
def permute_a_palindrome(input):
    flag = 0
    for i in set(input):
        if input.count(i) % 2 == 1:
            flag += 1
    return flag < 2