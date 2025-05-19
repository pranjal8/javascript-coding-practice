let map= new Map()
map.set("1", "One")
map.set(2, "Two")
map.set(true, "True")


map.get(true)
map.size;
map.set(3, "Three").set(4, "Four")

console.log(map)

for (const keys of map.keys()) {
    console.log(keys)
}
for (const value of map.values()) {
    console.log(value)
}
for (const entry of map) {
    console.log(entry)
}

