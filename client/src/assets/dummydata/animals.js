import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/American Fuzzy Lop.png';
import image11 from './images/Bearded Dragon.jpg';
import image12 from './images/blue parakeet.png';
import image13 from './images/brown gerbil.jpeg';
import image15 from './images/bunny.jpeg';
import image16 from './images/canary.png';
import image18 from './images/cat1.jpeg';
import image10 from './images/cat2.jpeg';
import image19 from './images/chinchilla.jpeg';
import image20 from './images/cockatiel.png';
import image33 from './images/cockatiel2.png';
import image21 from './images/dog.jpeg';
import image23 from './images/dog1.jpeg';
import image22 from './images/ferret.jpeg';
import image34 from './images/dog2.png';
import image14 from './images/ferret1.jpeg';
import image24 from './images/ferret2.jpeg';
import image25 from './images/Fuzzy Lop.png';
import image26 from './images/goldenRetrieverDog.png';
import image27 from './images/Hamsters.jpeg';
import image28 from './images/mouse.png';
import image29 from './images/parakeet.png';
import image32 from './images/rabbit.jpeg';
import image30 from './images/rabbit1.jpeg';
import image31 from './images/tortoise1.jpeg';
import image17 from './images/whiteFootedMouse.png';

const animals = [
  {
    _id: '1',
    name: 'Bella',
    animalType: 'Cat',
    age: 1,
    gender: 'Female',
    image: image1,
  },
  {
    _id: '2',
    name: 'Buddy',
    animalType: 'dog',
    age: 1,
    gender: 'Male',
    image: image2,
  },
  {
    _id: '3',
    name: 'Leo',
    animalType: 'cat',
    age: 1,
    gender: 'Male',
    image: image3,
  },
  {
    _id: '4',
    name: 'Snowy',
    animalType: 'dog',
    age: 1,
    gender: 'Female',
    image: image4,
  },
  {
    _id: '5',
    name: 'Oliver',
    animalType: 'dog',
    age: 2,
    gender: 'Male',
    image: image5,
  },
  {
    _id: '6',
    name: 'Teddy',
    animalType: 'cat',
    age: 4,
    gender: 'Male',
    image: image6,
  },
  {
    _id: '7',
    name: 'Sunny',
    animalType: 'hamster',
    age: 1,
    gender: 'Male',
    image: image7,
  },
  {
    _id: '8',
    name: 'Daisy',
    animalType: 'hamster',
    age: 2,
    gender: 'Female',
    image: image8,
  },
  {
    _id: '9',
    name: 'Fuzzy',
    animalType: 'rabbit',
    age: 2,
    gender: 'Male',
    image: image9,
  },
  {
    _id: '10',
    name: 'Charlie',
    animalType: 'cat',
    age: 6,
    gender: 'Male',
    image: image10,
  },

  {
    _id: '11',
    name: 'Dreca',
    animalType: 'Bearded Dragon',
    age: 3,
    gender: 'Female',
    image: image11,
  },
  {
    _id: '12',
    name: 'Bluey',
    animalType: 'Bird',
    age: 1,
    gender: 'Male',
    image: image12,
  },
  {
    _id: '13',
    name: 'Browny',
    animalType: 'Gerbil',
    age: 2,
    gender: 'Female',
    image: image13,
  },
  {
    _id: '14',
    name: 'Furry',
    animalType: 'Ferret',
    age: 1,
    gender: 'Male',
    image: image14,
  },

  {
    _id: '15',
    name: 'Bunny',
    animalType: 'rabbit',
    age: 1,
    gender: 'Female',
    image: image15,
  },
  {
    _id: '16',
    name: 'Canary',
    animalType: 'Bird',
    age: 1,
    gender: 'Male',
    image: image16,
  },
  {
    _id: '17',
    name: 'Riley',
    animalType: 'Mouse',
    age: 1,
    gender: 'Female',
    image: image17,
  },
  {
    _id: '18',
    name: 'Luna',
    animalType: 'Cat',
    age: 2,
    gender: 'Female',
    image: image18,
  },
  {
    _id: '19',
    name: 'Beans',
    animalType: 'Chinchilla',
    age: 2,
    gender: 'Female',
    image: image19,
  },
  {
    _id: '20',
    name: 'Ben',
    animalType: 'Bird',
    age: 1,
    gender: 'Male',
    image: image20,
  },
  {
    _id: '21',
    name: 'Max',
    animalType: 'Dog',
    age: 4,
    gender: 'Male',
    image: image21,
  },
  {
    _id: '22',
    name: 'Jolly',
    animalType: 'Ferret',
    age: 2,
    gender: 'Female',
    image: image22,
  },
  {
    _id: '23',
    name: 'Rex',
    animalType: 'Dog',
    age: 1,
    gender: 'Dale',
    image: image23,
  },
  {
    _id: '24',
    name: 'Penny',
    animalType: 'Ferret',
    age: 2,
    gender: 'Female',
    image: image24,
  },
  {
    _id: '25',
    name: 'Joey',
    animalType: 'Rabbit',
    age: 3,
    gender: 'Male',
    image: image25,
  },
  {
    _id: '26',
    name: 'Silky',
    animalType: 'Dog',
    age: 6,
    gender: 'Female',
    image: image26,
  },
  {
    _id: '27',
    name: 'Shelly',
    animalType: 'Hamster',
    age: 2,
    gender: 'Female',
    image: image27,
  },
  {
    _id: '28',
    name: 'Mollie',
    animalType: 'Mouse',
    age: 1,
    gender: 'Male',
    image: image28,
  },
  {
    _id: '29',
    name: 'Pearl',
    animalType: 'Bird',
    age: 2,
    gender: 'Female',
    image: image29,
  },
  {
    _id: '30',
    name: 'Holly',
    animalType: 'Rabbit',
    age: 2,
    gender: 'Female',
    image: image30,
  },
  {
    _id: '31',
    name: 'Jack',
    animalType: 'Tortoise',
    age: 10,
    gender: 'Male',
    image: image31,
  },
  {
    _id: '32',
    name: 'Jerry',
    animalType: 'Rabbit',
    age: 3,
    gender: 'Male',
    image: image32,
  },

  {
    _id: '33',
    name: 'Alfie',
    animalType: 'Bird',
    age: 1,
    gender: 'Male',
    image: image33,
  },
  {
    _id: '34',
    name: 'Axel',
    animalType: 'Dog',
    age: 3,
    gender: 'Male',
    image: image34,
  },

  
];

export default animals;
