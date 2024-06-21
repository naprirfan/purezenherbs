import db from '../../db.json';
import { Separator } from '../separator/Separator';

export const FAQ = () => {
    return (
        <div className="flex justify-center mb-6 lg:mb-8">
            <div className="container px-2">
                <h2 className="text-4xl text-center my-4 lg:my-6">FAQs</h2>

                <div>
                {
                        db.faq.map((entry) => (
                            <div key={entry.id}>
                                <div className="mt-1 font-bold text-lg">
                                    {entry.question}
                                </div>
                                <div className="my-1">
                                    {entry.answer}
                                </div>
                                <Separator />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}