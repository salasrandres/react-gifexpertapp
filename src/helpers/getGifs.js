
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=G9yCd9gZtE1MK9fV97pzQK8YHZ7yh9V9`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(x => {
        return {
            id: x.id,
            title: x.title,
            url: x.images.downsized_medium.url
        }
    });
    return gifs;
};