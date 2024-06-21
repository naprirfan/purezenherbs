import db from '../../db.json';
import { Separator } from '../separator/Separator';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-center py-4 bg-charcoal">
            <div className="container px-2 text-white">
                <div className="mb-3">
                    <h3 className="mb-2">Find us on</h3>
                    {
                        db.socialMedias.map(media => {
                            return (
                                <a href={media.url} key={media.id} className="mr-2">
                                    <i className={media.icon}></i>
                                </a>
                            )
                        })
                    }
                </div>
                <Separator mode="LIGHT" />
                <div className="mt-2">
                    &copy; Hak Cipta Pure Zen Herbs - {currentYear}
                </div>
            </div>
        </footer>
    )
}