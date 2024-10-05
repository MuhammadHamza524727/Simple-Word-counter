var userinput= prompt("Enter your Sentence?");
var words= userinput.trim().split(' ');
var wordsCount= 0;

for ( var i = 0; i < words.length; i++){
    if(words[i] !== ''){
        wordsCount++;

    }
    
}
alert(`You Have 👉${wordsCount}👈 Words`);