import React from 'react';

const Home = () => {
    return (
        <div className="componentcontainerhome">
            <span className="bold"> Lab 31 - React state och props </span>
            Deadline 2018-05-04 kl 15:55.<br/> Uppgiften ska utföras två och två och redovisas i skolan.<br/>
            Ni ska göra en webbapp som använder React för att rendera flera olika komponenter, med hjälp av state och props.<br/>
            <br/>
            <span className="bold">Flikar</span><br/>
            Den första komponenten ska vara en "tab component", alltså en komponent som visar olika innehåll beroende på vilken flik som är vald. <br/>De andra komponenterna ska finnas i olika flikar.<br/>
            <br/>
            <span className="bold">Login</span><br/>
            Komponenten ska ha ett button-element med texten "login". Om man klickar på den ska texten ändras, för att visa att användaren blivit inloggad. Man ska kunna logga ut genom att klicka igen.<br/>
            <br/>
            <span className="bold">Låst textfält</span><br/>
            Komponenten ska ha en kryssruta och ett textfält. Man ska bara kunna skriva i textfältet om kryssrutan är kryssad.<br/>
            <br/>
            <span className="bold">Baklängestext</span><br/>
            Komponenten ska ha ett textfält där man kan skriva in text, men varje gång man trycker på en bokstavstangent så ska istället den efterföljande bokstaven läggas till i textfältet. Z ersätts med A. Exempel: användaren skriver "aqz", textfältet innehåller "bra".<br/>
            <br/>
            <span className="bold">Gissa talet (för VG)</span><br/>
            Komponenten ska ha ett textfält. Komponenten ska generera ett slumpvis tal mellan 1 och 100. Sedan ska användaren kunna skriva in en gissning. Om gissningen är rätt ska komponenten skriva ut hur många gissningar som behövdes. Annars ska komponenten skriva ut om det gissade talet är för litet eller för stort.<br/>
            Bedömningskriterier<br/>
            <br/>
            <span className="bold">För G</span><br/>
            en tab komponent som kan visa olika innehåll
            en login komponent
            ett låst textfält, i första fliken
            en komponent för baklängestext, i andra fliken
            startvärden för tab, login och textfält ska skickas till komponenten med props<br/>
            <br/>
            <span className="bold">För VG</span><br/>
            en komponent för att spela "gissa talet"
            möjlighet att tala om för baklängeskomponenten hur många steg de bokstäver man skriver in ska skiftas

        </div>
    )
}

export default Home;