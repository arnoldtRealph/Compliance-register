function updateDate(input, vak) {
    const cell = document.getElementById(vak);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Dit wys die datum in 'n leesbare formaat

    if (input.files.length > 0) {
        // As 'n lêer opgelaai is, wys die datum
        cell.textContent = `Lêer opgelaai op: ${formattedDate}`;
    } else {
        // As geen lêer opgelaai is nie
        cell.textContent = 'Geen lêer opgelaai nie';
    }
}
