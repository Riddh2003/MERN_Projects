const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dq0hiynoq',
    api_key: '154996573166182',
    api_secret: 'GvHLp97XqnDLZlAoajQR7Spfv6U',
})

const uploadOnCloudinary = async (path) => {
    const responseCloudinary = await cloudinary.uploader.upload(path);
    return responseCloudinary;
}

module.exports = {
    uploadOnCloudinary
};