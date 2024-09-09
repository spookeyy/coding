# Given the first 2 Fibonacci numbers, 0, 1, find the 
# 20th in the sequence:

# for a fibonacci sequence, the sum of the next number in the sequence is
# as a result of the sum of the previous(preceeding) numbers.
# example: sequence; 0, 4, 4, 8, 12, 20, 32...
# in this case; 0, 1, 1, 2, 3, 5, 8...


def fibo():
    fibos = [0, 1]
    target = 20
    num_of_iterations = target - len(fibos)

    # loop the iterations
    for i in range(num_of_iterations):
        nextFibo = fibos[i] + fibos[i + 1]
        fibos.append(nextFibo)

    print(f"Sequence: {fibos}")
    print(f"20th: {fibos[19]}")
    return fibos[19] # 20th fibo


fibo()