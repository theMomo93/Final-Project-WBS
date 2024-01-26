const data = {
  "animals": [
    {
      "type": "dog",
      "name": "Buddy",
      "breed": "Golden Retriever",
      "size": "big",
      "personality": "Friendly, loyal, and playful",
      "image":"https://media.graphassets.com/resize=height:404,width:1280/output=format:webp/D41XOE5TQQIQOg5IBUBA?width=1280"
    },
    {
      "type": "dog",
      "name": "Luna",
      "breed": "German Shepherd",
      "size": "big",
      "personality": "Intelligent, confident, and alert",
      "image": "https://www.reuters.com/resizer/P9IRcR9k2IQgz0P7DzN0hiQEdhQ=/1080x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LPBYOVXQBVIHJA7H2BERSWAGV4.jpg"
    },
    {
      "type": "dog",
      "name": "Max",
      "breed": "Beagle",
      "size": "medium",
      "personality": "Curious, friendly, and merry",
      "image": "https://w-exclusiv.de/wp-content/uploads/2023/04/P1790934-scaled.jpg"
    },
    {
      "type": "dog",
      "name": "Bailey",
      "breed": "Labrador Retriever",
      "size": "big",
      "personality": "Outgoing, even-tempered, and gentle",
      "image": "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2023/resources/Labrador.jpg"
    },
    {
      "type": "dog",
      "name": "Coco",
      "breed": "Poodle",
      "size": "big",
      "personality": "Smart, active, and alert",
      "image": "https://assets.orvis.com/is/image/orvisprd/AdobeStock_141501554"
    },
    {
      "type": "dog",
      "name": "Rocky",
      "breed": "Boxer",
      "size": "medium",
      "personality": "Playful, energetic, and strong",
      "image": "https://www.josera.de/media/wysiwyg/ratgeber-de/ratgeber-hund/NEU_rasse_boxer_6.jpg"
    },
    {
      "type": "dog",
      "name": "Zoe",
      "breed": "Shih Tzu",
      "size": "small",
      "personality": "Affectionate, outgoing, and alert",
      "image": "https://www.petplate.com/wp-content/uploads/2020/08/shihtzu-06-1024x576.jpg"
    },
    {
      "type": "dog",
      "name": "Milo",
      "breed": "Dachshund",
      "size": "small",
      "personality": "Clever, lively, and devoted",
      "image": "https://images.bauerhosting.com/marketing/sites/22/2023/03/best-dog-food-for-dachshunds.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
    },
    {
      "type": "dog",
      "name": "Ruby",
      "breed": "Siberian Husky",
      "size": "big",
      "personality": "Outgoing, alert, and gentle",
      "image": "https://ca-times.brightspotcdn.com/dims4/default/1bd8b76/2147483647/strip/false/crop/960x640+0+0/resize/960x640!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F75%2F23%2Fa8532863497bbd4f2f55f2531481%2Fthumbnail-sirfoxxie-841886.jpg"
    },
    {
      "type": "dog",
      "name": "Charlie",
      "breed": "French Bulldog",
      "size": "medium",
      "personality": "Adaptable, playful, and smart",
      "image": "https://worldanimalfoundation.org/wp-content/uploads/2023/09/french-bulldog-price-1.jpg"
    },
    {
      "type": "cat",
      "name": "Whiskers",
      "breed": "Persian",
      "personality": "Gentle, quiet, and affectionate",
      "image": "https://people.com/thmb/zpHHz2for5sCMAKb7MPvuAVFIus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Persian-cat-rescue-062623-5-4b0d4ca9de064dd4ac51190db5312e68.jpg"
    },
    {
      "type": "cat",
      "name": "Mittens",
      "breed": "Siamese",
      "personality": "Vocal, social, and affectionate",
      "image": "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format"
    },
    {
      "type": "cat",
      "name": "Shadow",
      "breed": "Maine Coon",
      "personality": "Laid-back, friendly, and sociable",
      "image": "https://catastic.pet/wp-content/uploads/2023/02/portrait-maine-coon-cat.jpg"
    },
    {
      "type": "cat",
      "name": "Oreo",
      "breed": "Domestic Shorthair",
      "personality": "Playful, independent, and curious",
      "image": "https://www.ocregister.com/wp-content/uploads/2023/09/OCR-L-ADOPTHOOK-0909.jpg?w=1024"
    },
    {
      "type": "cat",
      "name": "Tiger",
      "breed": "Bengal",
      "personality": "Active, playful, and adventurous",
      "image": "https://www.baybengalz.co.uk/images/colourisation/the-silver-bengal-lrg-3.jpg"
    },
    {
      "type": "cat",
      "name": "Lily",
      "breed": "Ragdoll",
      "personality": "Relaxed, gentle, and affectionate",
      "image": "https://aquamarineragdolls.com/wp-content/uploads/2023/06/aquamarinedolls-sticky-seal-bicolor-ragdoll_6590-1024x575.jpg"
    },
    {
      "type": "cat",
      "name": "Smokey",
      "breed": "Scottish Fold",
      "personality": "Sweet-tempered, charming, and easygoing",
      "image": "https://www.koelle-zoo.de/media/0f/74/1e/1682404761/Steckbrief_Scottish_Fold_eingeschraenkte_Kommunikation.jpg"
    },
    {
      "type": "cat",
      "name": "Cleo",
      "breed": "Sphynx",
      "personality": "Curious, social, and affectionate",
      "image": "https://i.insider.com/5e6a114b235c1844af18ec92?width=1000&format=jpeg&auto=webp"
    },
    {
      "type": "cat",
      "name": "Leo",
      "breed": "Abyssinian",
      "personality": "Energetic, playful, and social",
      "image": "https://a-z-animals.com/media/animals/images/original/abyssinian.jpg"
    },
    {
      "type": "cat",
      "name": "Nala",
      "breed": "British Shorthair",
      "personality": "Easygoing, reserved, and adaptable",
      "image": "https://img.kleinanzeigen.de/api/v1/prod-ads/images/43/43c37e2c-eacd-413b-9f7f-b02949a200ff?rule=$_59.JPG"
    },
    {
      "type": "rabbit",
      "name": "Thumper",
      "breed": "Holland Lop",
      "personality": "Gentle, affectionate, and playful",
      "image":"https://upload.wikimedia.org/wikipedia/commons/d/da/2-month_old_Holland_lops.jpg"
    },
    {
      "type": "rabbit",
      "name": "Cotton",
      "breed": "Angora",
      "personality": "Curious, docile, and social",
      "image": "https://www.ukpets.com/blog/wp-content/uploads/2020/05/do-angora-rabbits-make-good-pets.jpg"
    },
    {
      "type": "rabbit",
      "name": "Bunny",
      "breed": "Mini Rex",
      "personality": "Playful, friendly, and intelligent",
      "image":"https://media-be.chewy.com/wp-content/uploads/mini-rex-main.jpg"
    },
    {
      "type": "rabbit",
      "name": "Snowball",
      "breed": "Netherland Dwarf",
      "personality": "Energetic, curious, and social",
      "image":"https://sites.create-cdn.net/siteimages/59/4/8/594843/17/1/7/17178167/1197x1200.JPG?1551793896"
    }
  ]
}
export default data