let n = gets()

let spl = n.split(", ")

spl.sort((a, b) => b - a)

print(spl)