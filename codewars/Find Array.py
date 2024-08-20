def find_array(arr1, arr2):
    newArray = []

    for x in arr2:
        if x < len(arr1):
            newArray.append(arr1[x])
    return newArray


# one liner
def find_array(arr1, arr2):
    return [arr1[x] for x in arr2 if x < len(arr1)]