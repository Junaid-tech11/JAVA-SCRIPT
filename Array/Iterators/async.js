function getbyId(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Got ${id}`);
            resolve(id);
        }, 1000);

    });
}

(async function () {
    const ids = [12, 21, 20, 30];
    //in case of for of loop they will print after 1 sec then next .......
    // for (const id of ids) {
    //     await getbyId(id);
    // }

    //they will show in after 1 second all of them 
    //forEach is not compatible
    ids.forEach(async (id) => {
        await getbyId(id);
    });
})();


