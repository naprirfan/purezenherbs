
export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-center py-4 bg-charcoal">
            <div className="container px-2 text-white">
                <div>
                    <h3>Find us on</h3>
                    <i className="fa-brands fa-instagram fa-xl"></i>
                    <i className="fa-brands fa-facebook fa-xl"></i>
                    <i className="fa-brands fa-whatsapp fa-xl"></i>
                </div>
                <div>
                    &copy; Copyright {currentYear} | Pure Zen Herbs
                </div>
            </div>
        </footer>
    )
}