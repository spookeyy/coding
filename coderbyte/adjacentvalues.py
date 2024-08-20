def StringChallenge(strParam):

    def has_3_unique_non_adjacent_digits(word):
        digits = []

        for i, char in enumerate(word):
            if char.isdigit():
                if len(digits) > 0 and i == digits[-1][1] + 1:
                    return True

                digits.append((char, i))

        
        unique_digits = {digit[0] for digit in digits}
        return len(unique_digits) == 3

    words = strParam.split()

    # check words
    for word in words:
        if not has_3_unique_non_adjacent_digits(word):
            return 'false'
        
    return 'true'


print(StringChallenge('2a3b5 wlo2rl3rd glgg92'))