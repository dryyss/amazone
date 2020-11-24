import bcrypt from 'bcryptjs';

var data = {
    users:[
        {
            name:'Andrys',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234' ,8),
            isAdmin: true,
        },
        {
            name:'Andrys1',
            email:'admin1@example.com',
            password: bcrypt.hashSync('1234' ,8),
            isAdmin: true,
        },

        {
            name:'Romain',
            email:'user@example.com',
            password: bcrypt.hashSync('1234' ,8),
            isAdmin: false,
        }
    ],
    product:[
        {
            
            name:'Chaise Gaming MTP',
            category:'Chaise',
            image:'../images/chaise1.jpg',
            price:350,countInStock:10,
            marque:'SecretLab',
            note:5,
            numReviews:10,
            description: 'qualité  trés biens'
        },
        {
           
            name:'Clavier gaming MTP',
            category:'Clavier',
            image:'../images/clavier1.jpg',
            price:80,countInStock:0,
            marque:'Corsair',
            note:2.5,
            numReviews:45,
            description: 'qualité  moyenne'
        },
        {
            
            name:'PC Gaming MTP',
            category:'PC',
            image:'../images/pc1.jpg',
            price:1820,countInStock:2,
            marque:'Aorus',
            note:1,
            numReviews:180,
            description: 'qualité  trés biens'
        },
        {
            
            name:'Souris Gaming MTP',
            category:'Souris',
            image:'/images/souris1.jpg',
            price:45,countInStock:140,
            marque:'MTP',
            note:4.5,
            numReviews:240,
            description: 'qualité  trés biens'
        },
        {
           
            name:'Tapis Gaming MTP',
            category:'Tapis',
            image:'/images/tapis1.jpg',
            price:120,countInStock:40,
            marque:'Asus',
            note:3.5,
            numReviews:24,
            description: 'qualité  trés biens'
        },
        {
          
            name:'Escalade',
            category:'Tapis',
            image:'/images/image7.jpg',
            price:120,countInStock:40,
            marque:'Montagne',
            note:3.5,
            numReviews:24,
            description: 'qualité  trés biens'
        },
        
    ]
}
export default data;