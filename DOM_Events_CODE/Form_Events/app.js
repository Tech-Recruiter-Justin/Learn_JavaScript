const tweetForm = document.querySelector('#tweetForm')
const showTweet = document.querySelector('#showTweet')
tweetForm.addEventListener('submit', function (e){
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(username.value, tweet.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    showTweet.append(newTweet);
}

showTweet.addEventListener('click', function (e){
    e.target.nodeName === 'LI' && e.target.remove();
});