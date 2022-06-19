const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // mongoose.set('debug', true)
    await mongoose.connect('mongodb://127.0.0.1:27017/admin');
}

const filmImageSchema = new mongoose.Schema({
    url: String 
  });

const FilmImages =  mongoose.models.upload_file || mongoose.model('upload_file', filmImageSchema, 'upload_file');


export async function getImageURLForExactFilm(_id){
    const image = await FilmImages.findById(_id)
    // console.log("image", image)
    // console.log(image.url)
    return image.url
    
}
