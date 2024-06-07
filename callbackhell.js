function Programming(subject, callback) {
    console.log(`Started studying ${subject}`);
    setTimeout(function() {
        callback('Frontend');
    }, 1000);
}

function Frontend(subject, callback) {
    console.log(`Studying ${subject}`);
    setTimeout(function() {
        callback('HTML');
    }, 1000);
}

function HTML(subject, callback) {
    console.log(`Studying ${subject}`);
    setTimeout(function() {
        callback('CSS');
    }, 1000);
}

function CSS(subject, callback) {
    console.log(`Studying ${subject}`);
    setTimeout(function() {
        console.log(`Finished studying ${subject}!`);
    }, 1000);
}


Programming('Programming', function(nextSubject) {
    Frontend(nextSubject, function(nextSubject) {
        HTML(nextSubject, function(nextSubject) {
            CSS(nextSubject, function() {
                console.log("All subjects studied!");
            });
        });
    });
});