def solution(a,b,c,d):
    list = []
    valid_time = f"{a}{b}:{c}{d}"

    list.append(valid_time)
    print(f"list: {list}")

    times = len(list)
    return times

solution(1,2,3,8)