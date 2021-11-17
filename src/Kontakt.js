import { useState } from 'react';
import KontaktForma from './components/KontaktForma';
import Nav from './components/Nav';

const Kontakt = () => {

    return (
        <div className="kontakt-strana">
            <Nav />
            <h2>Kontakt forma</h2>
            <KontaktForma />
        </div>
    );
}

export default Kontakt;