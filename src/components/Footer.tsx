import React from "react";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                © {new Date().getFullYear()} Ricette Ovunque. Tutti i diritti riservati.
            </div>
        </footer>
    );
}
