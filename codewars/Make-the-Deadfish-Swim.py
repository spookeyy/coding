# Make the Deadfish Swim
# https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/python

def parse(data):
   # ['o', 'o', 'o'] should equal [0, 0, 0]
   return [data.count('o'), data.count('s'), data.count('x')]