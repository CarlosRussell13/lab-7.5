const data = () => {
    return {
        data: {
            recipes: [],
        },
        init() {
            fetch('https://dummyjson.com/products/1')
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    this.data.recipes = Object.values(data);
                });
        },
    };
};