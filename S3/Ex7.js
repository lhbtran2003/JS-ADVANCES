function abc(...objects) {
     return objects.reduce((acc, obj) => {
        for(let key in obj) {
           if(obj.hasOwnProperty(key)) {
            acc[key] = obj[key]
           }
        } 
     },{})
}