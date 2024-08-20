def solution(N):
    if N <= 0:
        print("N should be a positive integer")

    max_chars = min(26, N // 2) # // is floor division which rounds down to the nearest whole number
    # min_chars = max(0, N - max_chars) # max is used to prevent negative values

    char_count = N // max_chars
    chars = ''.join(chr(ord('a') + i) for i in range(max_chars))

    return chars * char_count + chars[:N % max_chars]

print(solution(13))