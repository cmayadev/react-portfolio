import phrases from './api/phrases.json';

export const randomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

export const updateTasks = (setTasks, mutate) => {
    setTasks((state) => {
        const newState = structuredClone(state);
        mutate(newState);
        return newState;
    });
}
