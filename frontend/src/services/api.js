
//Timestamp
const ts = 1583521943;
//Public Key
const publicKey = "135eca1ab762d898b67d632b4ae29615";
//Hash MD5 com a combinação (ts+publicKey+privateKey)
const hash = "9766cd51a5641bb629b26b137b1d744c";
//URL base para as requisições a API da Marvel

const baseURL = "https://gateway.marvel.com:443/v1/public/";

const imageExtension = "/portrait_xlarge.jpg"

export { ts, publicKey, hash, baseURL, imageExtension };