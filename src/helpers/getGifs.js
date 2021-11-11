const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Wb4bDyzZzHJ38zNdu8CEExYprXYRsGeU&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  if (data) {
    const gifs = data.map((elem) => {
      return {
        id: elem.id,
        title: elem.title,
        url: elem.images.downsized_medium.url,
      };
    });
    return gifs;
  } else {
    throw Error("No se encontró la imagen");
  }
};

export { getGifs };
