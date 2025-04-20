const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem('readList');
    if (storedBookSTR) {
        return JSON.parse(storedBookSTR);
    }
    return [];
}

const addToDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert('Already added to the read list');
        return;
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
    }
    
}

const getStoredWishedBook = () =>{
    const storedBookSTR = localStorage.getItem('wishList');
    if (storedBookSTR) {
        return JSON.parse(storedBookSTR);
    }
    return [];
}

const addToWishDB = (id) => {
    const storedBookData = getStoredWishedBook();
    if (storedBookData.includes(id)) {
        alert('Already added to the wished list');
        return;
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('wishList', data);
    }
    
}

export {addToDB, getStoredBook, addToWishDB, getStoredWishedBook};