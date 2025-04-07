let products = {
    bestseller: [
        {
            productName: "1% Hyaluronic Sunscreen Aqua Gel with SPF 50 & PA++++ - 80g",
            category: "BestSellers",
            price: 599,
            image: "./public/1-wid-orange-bg..avif",
            rating: 4.5,
            reviews: "1000+",
            description: "Lightweight & Quick Absorbing | No White Cast",
        },
        {
            productName: "1% Hyaluronic Sunscreen Aqua Gel with SPF 50 & PA++++ - 80g",
            category: "BestSellers",
            price: 599,
            image: "./public/1-wid-orange-bg..avif",
            rating: 4.5,
            reviews: "1000+",
            description: "Lightweight & Quick Absorbing | No White Cast",
        },{
            productName: "1% Hyaluronic Sunscreen Aqua Gel with SPF 50 & PA++++ - 80g",
            category: "BestSellers",
            price: 599,
            image: "./public/1-wid-orange-bg..avif",
            rating: 4.5,
            reviews: "1000+",
            description: "Lightweight & Quick Absorbing | No White Cast",
        },{
            productName: "1% Hyaluronic Sunscreen Aqua Gel with SPF 50 & PA++++ - 80g",
            category: "BestSellers",
            price: 599,
            image: "./public/1-wid-orange-bg..avif",
            rating: 4.5,
            reviews: "1000+",
            description: "Lightweight & Quick Absorbing | No White Cast",
        },{
            productName: "1% Hyaluronic Sunscreen Aqua Gel with SPF 50 & PA++++ - 80g",
            category: "BestSellers",
            price: 599,
            image: "./public/1-wid-orange-bg..avif",
            rating: 4.5,
            reviews: "1000+",
            description: "Lightweight & Quick Absorbing | No White Cast",
        },{
            productName: "1% Hyaluronic Sunscreen Aqua Gel with SPF 50 & PA++++ - 80g",
            category: "BestSellers",
            price: 599,
            image: "./public/1-wid-orange-bg..avif",
            rating: 4.5,
            reviews: "1000+",
            description: "Lightweight & Quick Absorbing | No White Cast",
        },{
            productName: "1% Hyaluronic Sunscreen Aqua Gel with SPF 50 & PA++++ - 80g",
            category: "BestSellers",
            price: 599,
            image: "./public/1-wid-orange-bg..avif",
            rating: 4.5,
            reviews: "1000+",
            description: "Lightweight & Quick Absorbing | No White Cast",
        },
        // other products...
    ],
    newlaunch: [
        {
            productName: "15% Vitamin C Intense Brightening Ampoule Kit - 14ml",
            category: "NewLaunch",
            price: 1399,
            image: "./public/pdp_kojic-serum_shot_new.avif",
            rating: 4.9,
            reviews: "460+",
            description: "Brighter & Radiant Skin in 7 Days | Packed with Most Potent Vitamin C",
        },
        {
            productName: "15% Vitamin C Intense Brightening Ampoule Kit - 14ml",
            category: "NewLaunch",
            price: 1399,
            image: "./public/pdp_kojic-serum_shot_new.avif",
            rating: 4.9,
            reviews: "460+",
            description: "Brighter & Radiant Skin in 7 Days | Packed with Most Potent Vitamin C",
        },{
            productName: "15% Vitamin C Intense Brightening Ampoule Kit - 14ml",
            category: "NewLaunch",
            price: 1399,
            image: "./public/pdp_kojic-serum_shot_new.avif",
            rating: 4.9,
            reviews: "460+",
            description: "Brighter & Radiant Skin in 7 Days | Packed with Most Potent Vitamin C",
        },{
            productName: "15% Vitamin C Intense Brightening Ampoule Kit - 14ml",
            category: "NewLaunch",
            price: 1399,
            image: "./public/pdp_kojic-serum_shot_new.avif",
            rating: 4.9,
            reviews: "460+",
            description: "Brighter & Radiant Skin in 7 Days | Packed with Most Potent Vitamin C",
        },{
            productName: "15% Vitamin C Intense Brightening Ampoule Kit - 14ml",
            category: "NewLaunch",
            price: 1399,
            image: "./public/pdp_kojic-serum_shot_new.avif",
            rating: 4.9,
            reviews: "460+",
            description: "Brighter & Radiant Skin in 7 Days | Packed with Most Potent Vitamin C",
        },{
            productName: "15% Vitamin C Intense Brightening Ampoule Kit - 14ml",
            category: "NewLaunch",
            price: 1399,
            image: "./public/pdp_kojic-serum_shot_new.avif",
            rating: 4.9,
            reviews: "460+",
            description: "Brighter & Radiant Skin in 7 Days | Packed with Most Potent Vitamin C",
        },{
            productName: "15% Vitamin C Intense Brightening Ampoule Kit - 14ml",
            category: "NewLaunch",
            price: 1399,
            image: "./public/pdp_kojic-serum_shot_new.avif",
            rating: 4.9,
            reviews: "460+",
            description: "Brighter & Radiant Skin in 7 Days | Packed with Most Potent Vitamin C",
        },
    ]
}

const addProduct = (category) => {
    document.querySelector('.pro-list').innerHTML = ""; // clear previous products

    for (let i of products[category]) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = i.image;
        card.append(img);

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');

        const heading = document.createElement('h4');
        heading.classList.add('pro-name');
        heading.innerText = i.productName;
        cardInfo.append(heading);

        const ss = document.createElement('div');
        ss.classList.add('ss');
        ss.innerText = i.description;
        cardInfo.append(ss);

        const rating = document.createElement('div');
        rating.classList.add('rating');

        const star = document.createElement('div');
        star.classList.add('star');
        star.innerHTML = `<i class="fa-solid fa-star" style="color: goldenrod;"></i> ${i.rating}`;
        rating.append(star);

        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `<i class="fa-solid fa-certificate" style="color:blue"></i> ${i.reviews} Reviews`;
        rating.append(review);

        cardInfo.append(rating);

        const price = document.createElement('p');
        price.classList.add('pro-price');
        price.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i> ${i.price}`;
        cardInfo.append(price);

        card.append(cardInfo);

        const cardBtn = document.createElement('button');
        cardBtn.classList.add('card-btn');
        cardBtn.innerText = 'Add to cart';
        card.append(cardBtn);

        document.querySelector('.pro-list').append(card);
    }
}

// Usage example:
const bestSellerBtn = document.querySelector('.pro-btn');
const newLaunchBtn = document.querySelector('.pro-btn1');

bestSellerBtn.addEventListener('click', () => addProduct('bestseller'));
newLaunchBtn.addEventListener('click', () => addProduct('newlaunch'));
 window.onload = ()=>{
    addProduct('bestseller');
 }