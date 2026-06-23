const ladeDaten = async () => {
    const antwort = await fetch("HIER STEHT DIE URL");
    const daten = await antwort.json(); // Macht aus der Antwort lesbare Daten
    return daten;
}