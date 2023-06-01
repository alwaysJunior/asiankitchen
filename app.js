const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// BUTTONLAR

const btnAll = document.createElement('button');
btnAll.type = 'button' //tipini button olarak belirttik
btnAll.classList.add('btn-item', 'btn-light', 'btn-outline-none'); // button'a classlist ekliyoruz, bootstrap ile css ekledik.
btnAll.textContent = "All"; //button'ın içerisinde ne yazacağını belirttik.
btnAll.id = "all" // buttona id verdik

const container1 = document.querySelector('.btn-container'); // oluşturduğumuz button'ı ekleyeceğimiz class'ı seçiyoruz.
container1.appendChild(btnAll); // button'ı belirttiğimiz değişkendeki class'a ekliyoruz.



//KOREA BUTTON
const btnKorea = document.createElement('button');
btnKorea.type = 'button' //tipini button olarak belirttik
btnKorea.classList.add('btn-item', 'btn-light', 'btn-outline-none'); // button'a classlist ekliyoruz, bootstrap ile css ekledik.
btnKorea.textContent = "Korea"; //button'ın içerisinde ne yazacağını belirttik.
btnKorea.id = "korea" // buttona id verdik

const container2 = document.querySelector('.btn-container'); // oluşturduğumuz button'ı ekleyeceğimiz class'ı seçiyoruz.
container2.appendChild(btnKorea); // button'ı belirttiğimiz değişkendeki class'a ekliyoruz.


// JAPAN BUTTON
const btnJapan = document.createElement('button');
btnJapan.type = 'button' //tipini button olarak belirttik
btnJapan.classList.add('btn-item', 'btn-light', 'btn-outline-none'); // button'a classlist ekliyoruz, bootstrap ile css ekledik.
btnJapan.textContent = "Japan"; //button'ın içerisinde ne yazacağını belirttik.
btnJapan.id = "japan" // buttona id verdik

const container3 = document.querySelector('.btn-container'); // oluşturduğumuz button'ı ekleyeceğimiz class'ı seçiyoruz.
container3.appendChild(btnJapan); // button'ı belirttiğimiz değişkendeki class'a ekliyoruz.


//CHINA BUTTON
const btnChina = document.createElement('button');
btnChina.type = 'button' //tipini button olarak belirttik
btnChina.classList.add('btn-item', 'btn-light', 'btn-outline-none'); // button'a classlist ekliyoruz, bootstrap ile css ekledik.
btnChina.textContent = "China"; //button'ın içerisinde ne yazacağını belirttik.
btnChina.id = "china" // buttona id verdik

const container4 = document.querySelector('.btn-container'); // oluşturduğumuz button'ı ekleyeceğimiz class'ı seçiyoruz.
container4.appendChild(btnChina); // button'ı belirttiğimiz değişkendeki class'a ekliyoruz.