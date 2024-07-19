// Funksiya: Verilmiş stringin palindrom olub olmadığını yoxlayır
function isPalindrome(str) {
    // Stringi kiçik hərflərə çevirir və boşluqları çıxarır
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();

    // Stringin tərsini alır
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Təmizlənmiş stringlə tərsinə çevrilmiş stringi müqayisə edir
    return cleanedStr === reversedStr;
}

// Nümunə istifadəsi
const testString = "Ey mələk kələm ye";
const result = isPalindrome(testString);
console.log(`"${testString}" palindromdurdur?`, result);