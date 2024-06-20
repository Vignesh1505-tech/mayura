const handleApiResponse = async (response) => {
    if (!response.status === 200) {
        const errorMessage = `HTTP Error: ${response.status}`;
        throw new Error(errorMessage);
    }
    
    try {
        const data = await response.data;
        return data;
    } catch (error) {
        throw new Error('Invalid JSON response');
    }
};

export { handleApiResponse };