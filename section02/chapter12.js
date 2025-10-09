//음식을 주문하는 상황을 가정
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡복이";
        callback(food);
    },3000);
}

function cooldownFood(food,callback){
    setTimeout((food)=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    },2000);
}

function freezeFood(food,callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`
        callback(freezedFood);
    },1500)
}



orderFood((food)=>{
    console.log(food);
    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood)
    });
        freezeFood(food,(freezedFood)=>{
            console.log(freezedFood)
        })


});

