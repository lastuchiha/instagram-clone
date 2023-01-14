export default function debounce(func, time) {
    let prev;

    return (...args) => {
        if (prev)
            clearTimeout(prev)
        prev = setTimeout(() => func(...args), time)
    }
}