function promiseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const errr = true;
            if (!errr) {
                console.log('resolve successfully');
                resolve();
            } else {
                console.log('reject successfully');
                reject();
            }

        }, 2000);
    })


}

promiseOne().then(() => {
    console.log('rafi:very good bro');
})
    .catch(function () {
        console.log('rafi: very bad bro');
    })