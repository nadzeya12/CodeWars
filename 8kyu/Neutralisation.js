// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//
//     When positives and positives interact, they remain positive.
//     When negatives and negatives interact, they remain negative.
//     But when negatives and positives interact, they become neutral, and are shown as the number 0.

function neutralise(s1, s2) {
    return str1.split("").map((char, i) => (char === str2[i] ? char : "0")).join("")
}