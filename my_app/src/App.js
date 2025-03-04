function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;

// import { useState, useEffect } from 'react'

// export function useLocalStorage(key, initialValue) {
//   const [localValue, setLocalValue] = useState(() => {
//     const storedValue = localStorage.getItem(key)
//     return storedValue !== null ? storedValue : initialValue
//   })

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(localValue))
//   }, [key, localValue])

// }