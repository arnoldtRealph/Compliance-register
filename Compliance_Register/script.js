function updateDate(inputElement, id) {
    const row = inputElement.closest('tr'); // Verkry die ry waarin die lêer oplaai gebeur

    if (inputElement.files.length > 0) {
        const currentDate = new Date().toLocaleDateString();
        document.getElementById(id).innerText = "Lêer opgelaai op " + currentDate;

        // Vertoon 'n alert boodskap
        alert("Lêer is suksesvol opgelaai op " + currentDate);

        // Voeg 'n groen agtergrondkleur vir suksesvolle opgawe
        row.style.backgroundColor = '#d4edda'; // Groen agtergrondkleur
        row.style.transition = 'background-color 0.5s ease'; // Vervaag effek
    } else {
        document.getElementById(id).innerText = "Geen lêer opgelaai nie";
        row.style.backgroundColor = ''; // Herstel die agtergrondkleur
    }
}
