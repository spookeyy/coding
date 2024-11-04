def move_zeros(lst):
    print(lst)
    for i in lst:
        if i == 0:
            lst.insert(-1, i)
    return lst
move_zeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 2, 9])

# insert item at the last index
list_abc = ['a', 'b', 'c']
list_abc.insert(len(list_abc), 'd')
list_abc
# => ['a', 'b', 'c', 'd']