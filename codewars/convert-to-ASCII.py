asci_values = [ord(x) for x in "abcef"]
print(asci_values)

# [97, 98, 99, 101, 102]

# convert back to string
print("".join([chr(x) for x in asci_values]))

# abcdef

character = [chr(x) for x in asci_values]
print("".join(character))

# missing letter in range a-z
missing = [chr(x) for x in range(ord('a'), ord('z') + 1) if x not in asci_values]
print("".join(missing))