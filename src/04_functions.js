const checkEmail = (email) => {
    if (email.includes("@")) {
        return "Gültige Email.";
    } else {
        return "Ungültige Email.";
    }
};

const result = checkEmail("talent@web.de");