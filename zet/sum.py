# Write a Python program that creates a list of five numbers and calculates their sum and average.
numbers = [1,2,3,4,5]

def sum_of(numbers):
    print("Total:",sum(numbers))
    return sum(numbers)

total_sum = sum_of(numbers)

def average(numbers):
    average = total_sum/len(numbers)
    print(f'Average: {average}')
    return average

average(numbers)