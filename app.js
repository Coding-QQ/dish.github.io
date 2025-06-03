// 菜品数据
const allDishes = [
    {
        id: 10,
        name: '干锅排骨',
        price: 48,
        image: 'images/干锅排骨.jpg'
    },
    {
        id: 36,
        name: '干锅鸡',
        price: 36,
        image: 'images/干锅鸡.jpg'
    },
    {
        id: 11,
        name: '水煮肉片',
        price: 45,
        image: 'images/水煮肉片.jpg'
    },
    {
        id: 1,
        name: '辣子鸡',
        price: 38,
        image: 'images/辣子鸡.jpg'
    },
    {
        id: 2,
        name: '鱼香肉丝',
        price: 32,
        image: 'images/鱼香肉丝.jpg'
    },
    {
        id: 8,
        name: '糖醋排骨',
        price: 42,
        image: 'images/糖醋排骨.jpg'
    },
    {
        id: 13,
        name: '酸菜鱼',
        price: 58,
        image: 'images/酸菜鱼.jpg'
    },
    {
        id: 14,
        name: '芋儿鸡',
        price: 42,
        image: 'images/芋儿鸡.jpg'
    },
    {
        id: 15,
        name: '青椒肉丝',
        price: 32,
        image: 'images/青椒肉丝.jpg'
    },
    {
        id: 17,
        name: '莴笋肉片',
        price: 28,
        image: 'images/莴笋肉片.jpg'
    },
    {
        id: 18,
        name: '土豆烧鸡',
        price: 38,
        image: 'images/土豆烧鸡.jpg'
    },
    {
        id: 19,
        name: '土豆烧牛肉',
        price: 48,
        image: 'images/土豆烧牛肉.jpg'
    },
    {
        id: 20,
        name: '番茄牛肉',
        price: 52,
        image: 'images/番茄牛腩.jpg'
    },
    {
        id: 21,
        name: '小炒黄牛肉',
        price: 45,
        image: 'images/小炒黄牛肉.jpg'
    },
    {
        id: 9,
        name: '宫保鸡丁',
        price: 36,
        image: 'images/宫保鸡丁.jpg'
    },
    {
        id: 12,
        name: '老妈蹄花',
        price: 52,
        image: 'images/老妈蹄花.jpg'
    },
    {
        id: 16,
        name: '辣椒炒肉',
        price: 35,
        image: 'images/辣椒炒肉.jpg'
    },
    {
        id: 23,
        name: '干煸四季豆',
        price: 25,
        image: 'images/干煸四季豆.jpg'
    },
    {
        id: 35,
        name: '肉末豇豆',
        price: 18,
        image: 'images/肉末豇豆.jpg'
    },
    {
        id: 22,
        name: '甜椒肉丝',
        price: 32,
        image: 'images/甜椒肉丝.png'
    },
    {
        id: 24,
        name: '豆豉鲮鱼油麦菜',
        price: 28,
        image: 'images/豆豉鲮鱼油麦菜.jpg'
    },
    {
        id: 25,
        name: '炒空心菜',
        price: 18,
        image: 'images/炒空心菜.jpg'
    },
    {
        id: 26,
        name: '肉丸子汤',
        price: 28,
        image: 'images/肉丸子汤.jpg'
    },
    {
        id: 27,
        name: '紫菜蛋花汤',
        price: 18,
        image: 'images/紫菜蛋花汤.jpg'
    },
    {
        id: 28,
        name: '炖鸡汤',
        price: 48,
        image: 'images/炖鸡汤.jpg'
    },
    {
        id: 32,
        name: '排骨汤',
        price: 36,
        image: 'images/排骨汤.jpg'
    },
    {
        id: 29,
        name: '咖喱鸡',
        price: 38,
        image: 'images/咖喱鸡.jpg'
    },
    {
        id: 30,
        name: '咖喱牛肉',
        price: 48,
        image: 'images/咖喱牛肉.jpg'
    },
    {
        id: 31,
        name: '意式番茄肉酱面',
        price: 35,
        image: 'images/意式番茄肉酱面.jpg'
    },
    {
        id: 6,
        name: '牛排',
        price: 88,
        image: 'images/牛排.jpg'
    },
    {
        id: 7,
        name: '米饭',
        price: 3,
        image: 'images/米饭.jpg'
    },
    {
        id: 32,
        name: '冷吃牛肉',
        price: 3,
        image: 'images/冷吃牛肉.jpg'
    },
    {
        id: 33,
        name: '豪华蛋炒饭',
        price: 18,
        image: 'images/蛋炒饭.jpg'
    },
    {
        id: 34,
        name: '小馄饨',
        price: 18,
        image: 'images/小馄饨.jpg'
    },
    
];

// 分类数据
const categories = {
    'signature': [10, 8, 21, 2, 14],
    'sichuan': [1, 2, 8, 9, 10, 11, 12, 13, 14, 32, 36],
    'hunan': [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    'soup': [26, 27, 28],
    'western': [6, 29, 30, 31],
    'staple': [7, 33, 34]
};

// 购物车数据
let cart = [];
let total = 0;

// 初始化菜单
function initMenu() {
    const menuElement = document.getElementById('menu');
    menuElement.innerHTML = ''; // 清空当前菜单
    
    const dishesToShow = category ? 
        allDishes.filter(dish => categories[category]?.includes(dish.id)) :
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
    
    // 更新购物车显示，添加删除按钮
    cartItemsElement.innerHTML = cart.map((item, index) => 
        `<div>
            <p>${item.name} x${item.quantity} - ${item.price * item.quantity}元</p>
            <button class="delete-btn" data-index="${index}">×</button>
        </div>`
    ).join('');
    
    // 添加删除按钮事件监听
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            updateCart();
        });
    });
    
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
function filterByCategory(selectedCategory) {
    category = selectedCategory;
    initMenu();
}

// 初始化
window.onload = function() {
    // 初始化分类点击事件
    const categoryItems = document.querySelectorAll('#categories li');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有active类
            categoryItems.forEach(i => i.classList.remove('active'));
            // 为当前点击项添加active类
            item.classList.add('active');
            filterByCategory(item.dataset.category);
        });
    });
    
    // 默认显示所有菜品
    filterByCategory(null);
    
    document.getElementById('checkout').addEventListener('click', checkout);
};