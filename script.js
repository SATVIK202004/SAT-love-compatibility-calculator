document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Love is composed of a single soul inhabiting two bodies. - Aristotle",
        "To love and be loved is to feel the sun from both sides. - David Viscott",
        "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope. - Maya Angelou",
        "Love is when the other person's happiness is more important than your own. - H. Jackson Brown Jr.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",
        "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.",
        "True love stories never have endings. - Richard Bach"
    ];

    function displayQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").innerText = quotes[randomIndex];
    }

    setInterval(displayQuote, 4000); 
    displayQuote(); 

    setTimeout(() => {
        document.getElementById("splashScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    }, 10000); 

    updateDateTime();
    setInterval(updateDateTime, 1000); 
});

function showForm() {
    document.getElementById("compatibilityForm").style.display = "block";
    document.getElementById("zodiacButton").style.display = "none";
}

function calculateCompatibility() {
    const name1 = document.getElementById("name1").value;
    const birthdate1 = new Date(document.getElementById("birthdate1").value);
    const name2 = document.getElementById("name2").value;
    const birthdate2 = new Date(document.getElementById("birthdate2").value);

    const sign1 = getZodiacSign(birthdate1);
    const sign2 = getZodiacSign(birthdate2);

    const compatibilityPercentage = calculateZodiacCompatibility(birthdate1, birthdate2);

    document.getElementById("result").innerHTML = `
      <p>Love Compatibility for ${name1} (${sign1}) and ${name2} (${sign2})</p>
      <p>Birth Date of ${name1}: ${birthdate1.toDateString()}</p>
      <p>Birth Date of ${name2}: ${birthdate2.toDateString()}</p>
      <p>Zodiac Compatibility: ${compatibilityPercentage}%</p>
    `;
}

function getZodiacSign(birthdate) {
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    } else {
        return "Capricorn";
    }
}

function calculateZodiacCompatibility(birthdate1, birthdate2) {
    const sortedDates = [birthdate1.toISOString(), birthdate2.toISOString()].sort();
    const hash = hashCode(sortedDates[0] + sortedDates[1]);
    const compatibilityPercentage = Math.abs(hash % 101); 
    return compatibilityPercentage;
}

function hashCode(str) {
    let hash = 0;
    if (str.length == 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; 
    }
    return hash;
}

function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById("datetime").innerText = formattedDateTime;
}
