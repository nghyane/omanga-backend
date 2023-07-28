import { Link, Head } from '@inertiajs/react';
import logo from '../../images/logo.svg';

export default function Welcome({ auth, laravelVersion, phpVersion }) {


    return (
        <>
            <Head title="Welcome" />

            <header className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-6">
                        <img className="h-8 md:h-12" src={logo} alt="Laravel" />
                    </div>
                </div>
            </header>

            <div className="flex justify-center">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </div>
        </>
    );
}
