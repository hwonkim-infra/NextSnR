export default function countColor(obj, color) {
    let count = 0;
    
    // Iterate over the object's keys and values.
    for (const [key, val] of Object.entries(obj)) {
      if (val === color) {
        count++;
      }
    
      if (typeof val === "object") {
        count += countColor(val, color);
      }
    }
  return count
}
