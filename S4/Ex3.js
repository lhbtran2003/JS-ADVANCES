function typeConsole(type = "log") {
    const message = `Đây là type: ${type}`;

    // Kiểm tra và sử dụng phương thức tương ứng của đối tượng console
    if (type === "log") {
        console.log(message);
    } else if (type === "warn") {
        console.warn(message);
    } else if (type === "error") {
        console.error(message);
    } else {
        console.log(`Type không hợp lệ: ${type}`);
    }
}

typeConsole();         
typeConsole("warn");    
typeConsole("error");   
typeConsole("info");   
