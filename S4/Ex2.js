function greetingWithWeather(name, weather) {
    if (weather === "sunny") {
        return `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
    } else if (weather === "rainy") {
        return `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
    } else {
        return `Chào ${name}! Hôm nay thời tiết không xác định.`;
    }
}

console.log(greetingWithWeather("Nguyễn", "sunny"));  // Kết quả: Chào Nguyễn! Hôm nay trời nắng tuyệt vời!
console.log(greetingWithWeather("Linh", "rainy"));    // Kết quả: Chào Linh! Hôm nay trời mưa, hãy mang theo ô!
console.log(greetingWithWeather("An", "cloudy"));     // Kết quả: Chào An! Hôm nay thời tiết không xác định.
