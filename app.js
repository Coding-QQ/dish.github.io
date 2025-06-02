// 菜品数据
const allDishes = [
    {
        id: 1,
        name: '辣子鸡',
        price: 38,
        image: 'images/辣子鸡.png'
    },
    {
        id: 2,
        name: '鱼香肉丝',
        price: 32,
        image: 'images/dish1.jpg'
    },
    {
        id: 3,
        name: '水煮鱼',
        price: 58,
        image: 'images/dish1.jpg'
    },
    {
        id: 4,
        name: '剁椒鱼头',
        price: 68,
        image: 'images/dish1.jpg'
    },
    {
        id: 5,
        name: '番茄蛋汤',
        price: 28,
        image: 'images/dish1.jpg'
    },
    {
        id: 6,
        name: '牛排',
        price: 88,
        image: 'images/dish1.jpg'
    },
    {
        id: 7,
        name: '米饭',
        price: 3,
        image: 'images/dish1.jpg'
    }
];

// 分类数据
const categories = {
    'signature': [1, 2],
    'sichuan': [2, 3],
    'hunan': [4],
    'soup': [5],
    'western': [6],
    'staple': [7]
};

// 购物车数据
let cart = [];
let total = 0;

// 初始化菜单
function initMenu() {
    const menuElement = document.getElementById('menu');
    
    const dishesToShow = category ? 
        allDishes.filter(dish => categories[category].includes(dish.id)) :
        allDishes;
        
    dishesToShow.forEach(dish => {
        const dishElement = document.createElement('div');
        dishElement.className = 'dish';
        dishElement.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <h3>${dish.name}</h3>
            <p>价格: ${dish.price}元</p>
            <button onclick="addToCart(${dish.id})">加入购物车</button>
        `;
        menuElement.appendChild(dishElement);
    });
}

// 添加到购物车
function addToCart(dishId) {
    const dish = allDishes.find(d => d.id === dishId);
    if (!dish) return;
    
    // 检查是否已在购物车中
    const existingItem = cart.find(item => item.id === dishId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...dish,
            quantity: 1
        });
    }
    
    updateCart();
}

// 更新购物车
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    // 计算总金额
    total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    // 更新购物车显示
    cartItemsElement.innerHTML = cart.map(item => 
        `<div>
            <p>${item.name} x${item.quantity} - ${item.price * item.quantity}元</p>
        </div>`
    ).join('');
    
    totalElement.textContent = total;
}

// 下单
function checkout() {
    if (cart.length === 0) {
        alert('购物车为空，请先添加菜品');
        return;
    }
    
    alert(`下单成功！总金额: ${total}元`);
    cart = [];
    total = 0;
    updateCart();
}

// 根据分类筛选菜品
function filterByCategory(category) {
    const menuElement = document.getElementById('menu');
    menuElement.innerHTML = '';
    
    const filteredDishes = category ? 
        allDishes.filter(dish => categories[category].includes(dish.id)) : 
        allDishes;
    
    filteredDishes.forEach(dish => {
        const dishElement = document.createElement('div');
        dishElement.className = 'dish';
        dishElement.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <h3>${dish.name}</h3>
            <p>价格: ${dish.price}元</p>
            <button onclick="addToCart(${dish.id})">加入购物车</button>
        `;
        menuElement.appendChild(dishElement);
    });
}

// 初始化
window.onload = function() {
    // 初始化分类点击事件
    const categoryItems = document.querySelectorAll('#categories li');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            filterByCategory(item.dataset.category);
        });
    });
    
    // 默认显示所有菜品
    filterByCategory();
    
    document.getElementById('checkout').addEventListener('click', checkout);
};