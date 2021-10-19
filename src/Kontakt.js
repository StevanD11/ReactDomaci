import { useState } from 'react';

const Kontakt = () => {

    const [imeprezime, setImeprezime] = useState('');
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const forma = { imeprezime, email, poruka };
        alert('Uneto ime i prezime: ' + imeprezime + '\n' +
            'Uneti email: ' + email + '\n' +
            'Uneta poruka: ' + poruka);
    }

    return (
        <div className="kontakt-strana">
            <h2>Kontakt forma</h2>
            <form onSubmit={handleSubmit}>
                <label>Ime i prezime:</label>
                <input
                    type="text"
                    required
                    value={imeprezime}
                    onChange={(e) => setImeprezime(e.target.value)}
                />
                <label>E-mail:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Poruka:</label>
                <textarea
                    required
                    value={poruka}
                    onChange={(e) => setPoruka(e.target.value)}
                > </textarea>
                <button>Posalji poruku</button>
            </form>
        </div>
    );
}

export default Kontakt;