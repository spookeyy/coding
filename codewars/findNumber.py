# you're expected to return an array of all possible missing numbers.
# Here's a string with numbers from 1 - 21, its missing one number 
# and the string is then shuffled, your'e expected to return a list 
# of possible missing numbers.
# 1, 21, "2198765123416171890101112131415"  => [ 12, 21 ] 
# return [int(x) for x in st if int(x) not in range(start, stop + 1)]
def find_number(start, stop, st):
    # conv st to list
    numbers = [int(x) for x in list(st)]
    sorted_numbers = sorted(numbers)

    for x in range(start, stop + 1):
        new_sorted_numbers = sorted([x for x in range(start, stop + 1)])

    print(new_sorted_numbers)
    
    # missing numbers
    missing_numbers = [x for x in range(start, stop + 1) if x not in sorted_numbers]
    print(missing_numbers)

    # Check for possible two-digit numbers formed by repeating a single digit and append to results list
    results = []
    for x in missing_numbers:
        if x > 9 and x <= stop:
            if x % 10 == numbers[0]:
                results.append(x)
    print(results)
    return results


find_number(1, 21, "2198765123416171890101112131415")