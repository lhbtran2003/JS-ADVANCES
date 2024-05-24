type Country = "VN" | "US" | "UK";

function getShippingCost(country: Country): number {
    const shippingCosts: { [key in Country]: number } = {
        "VN": 10000,
        "US": 20000,
        "UK": 30000
    };
    
    return shippingCosts[country];
}

// Ví dụ sử dụng hàm:
console.log(getShippingCost("VN"));  // Output: 10000
console.log(getShippingCost("US"));  // Output: 20000
console.log(getShippingCost("UK"));  // Output: 30000
