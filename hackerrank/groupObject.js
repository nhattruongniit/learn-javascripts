const input = [
  {
    "id": "1",
    "slug": "nice-shape-shirt",
    "featureImage": "https://images-na.ssl-images-amazon.com/images/I/61HFW%2BLPyhL._UY741_.jpg",
    "images": "UY741_.jpg,UY445_.jpg,UY445_.jpg",
    "name": "ドロップショルダーニットトップス",
    "currency": "円",
    "price": "7212.99",
    "rating": "2.2",
    "getPoint": "40",
    "sizes": "Free,S,L,XL,XXL",
    "colors": "#FF5733,#BAFF33",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    "lockversion": 0
  },
  {
    "id": "2",
    "slug": "ripon-one-piecer",
    "featureImage": "https://images-na.ssl-images-amazon.com/images/I/71ep7ZqQfSL._SX569_.jpg",
    "images": "SX569_.jpg,_SY355_.jpg,SY355_.jpg",
    "name": "リボンベルト付カシュクールｘプリーツドッキングワンピース",
    "currency": "円",
    "price": "2.999",
    "rating": "3.6",
    "getPoint": "20",
    "sizes": "Free,S,L,XL,XXL",
    "colors": "#FF5733,#BAFF33,#33FFCC",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in",
    "lockversion": 0
  }
]

const output = (data, [...group]) => {
  return data.reduce((acc, curr) => {
    group.map(value => {
      acc[value] = curr[value].split(',');
      acc = [value, ...acc[value]]
    });

    return acc;
  }, {});
};

let result = output(input, ['images', 'colors']);
console.log(result);



