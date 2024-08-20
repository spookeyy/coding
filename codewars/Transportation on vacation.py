def rental_car_cost(d):
    cost = 40
    total = d * cost
    if d >= 3 and d < 7:
        total -= 20
    elif d >= 7:
        total -= 50
    return total

