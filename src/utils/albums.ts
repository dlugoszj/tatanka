
export async function getImages(albumId: string){
    // let albumImages : string = [];
    const allImages = import.meta.glob<{ default: ImageMetadata }>("../content/albums/**/*.{jpeg,jpg}");
    let albumImages = Object.fromEntries(Object.entries(allImages).filter(([key]) => key.includes(albumId)));
    const readyImages = await Promise.all(Object.values(albumImages).map((image) => image().then((mod) => mod.default )));
    return readyImages;
}
