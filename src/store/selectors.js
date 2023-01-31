// une fonction qui récupère le plus grand id parmi les messages
export const getHighestId = (state) => {
    const ids = state.messages.map(message => message.id);

    return  Math.max(...ids);
}