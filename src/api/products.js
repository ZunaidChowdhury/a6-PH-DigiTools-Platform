export const getProducts = async () => {
    const response = await fetch('/productsData.json');
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};
