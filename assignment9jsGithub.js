/**
 * Created by oliviac16 on 7/15/17.
 */
var wordItems;
window.onload = getwordItems();

function highlight() {
    for (var i = 0; i < wordItems.length; i++) {
        wordItems[i].style.color = "red";
    }
}

function return_normal() {
    for (var i = 0; i < wordItems.length; i++) {
        wordItems[i].style.color = "black";
    }
}

function getwordItems() {
    wordItems = document.getElementsByTagName('strong');
}