import db from '../../db.json';
import { Separator } from '../separator/Separator';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-center py-4 bg-charcoal">
            <div className="container px-2 text-white">
                <div className="mb-2">
                    <h3 className="mb-1">Find us on</h3>
                    {
                        db.socialMedias.map(media => {
                            return (
                                <a href={media.url} key={media.id} className="mr-1">
                                    <i className={media.icon}></i>
                                </a>
                            )
                        })
                    }
                </div>
                <Separator mode="LIGHT" />
                <div className="mt-2">
                    &copy; Copyright {currentYear} | Pure Zen Herbs
                </div>
            </div>
        </footer>
    )
}