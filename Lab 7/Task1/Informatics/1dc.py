n = int(input())
arr = input().split()

count = 0

for i in range(n):
    if int(arr[i]) > 0:
        count += 1

print(count)
