const app = Vue.createApp({
   data() {
      return {
         restaurants: [
            {
               name: 'Island Grill',
               img: 'images/1-small.jpg',
               rating: 5,
               noRating: 0,
               isOpen: true,
               location: '969 Bear Hill Road Greenville, NC 27834. Santo Domingo. Dominican Republic',
            },
            {
               name: 'Restaurante Filigrana Maestra',
               img: 'images/2-small.jpg',
               rating: 4,
               noRating: 1,
               isOpen: false,
               location: '969 Bear Hill Road Greenville, NC 27834. Santo Domingo. Dominican Republic',
            },
            {
               name: 'Bangalore Spices',
               img: 'images/3-small.jpg',
               rating: 4,
               noRating: 1,
               isOpen: true,
               location: '969 Bear Hill Road Greenville, NC 27834. Santo Domingo. Dominican Republic',
            },
            {
               name: 'La Avenida Dorada',
               img: 'images/4-small.jpg',
               rating: 3,
               noRating: 2,
               isOpen: false,
               location: '969 Bear Hill Road Greenville, NC 27834. Santo Domingo. Dominican Republic',
            },
            {
               name: 'El Pirata Porch',
               img: 'images/5-small.jpg',
               rating: 2,
               noRating: 3,
               isOpen: true,
               location: '969 Bear Hill Road Greenville, NC 27834. Santo Domingo. Dominican Republic',
            },
            {
               name: 'Green Curry Restaurant & Bar',
               img: 'images/6-small.jpg',
               rating: 1,
               noRating: 4,
               isOpen: false,
               location: '969 Bear Hill Road Greenville, NC 27834. Santo Domingo. Dominican Republic',
            }

         ],
         isModalOpen: false
      }
   }
});

app.mount('.container');