const numbers = [1, 2, 3, 4, 5];
console.log('Initial array elements:'+'['+numbers+']');

function double(number) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            var doubled = number * 2;
            console.log('Processed number: ' + number + ' -> ' + doubled);
            resolve(doubled);
        }, 1000);
    });
}


function processNumbers(numbers) {
    return new Promise(function(resolve, reject) {
        var results = [];
        var currentIndex = 0;

        function processNext() {
            if (currentIndex < numbers.length) {
                double(numbers[currentIndex])
                    .then(function(doubled) {
                        results.push(doubled);
                        currentIndex++;
                        processNext();
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            } else {
                resolve(results);
            }
        }

        processNext();
    });
}


processNumbers(numbers)
    .then(function(doubledNumbers) {
        console.log('All numbers processed:', doubledNumbers);
    })
    .catch(function(error) {
        console.error('Error processing numbers:', error);
    });