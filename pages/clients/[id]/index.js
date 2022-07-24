import { useRouter } from 'next/router';

export default function ClientsProjectsPage() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {
        // load data
        // router.push('/clients/max/projecta');
        router.replace('/clients/max/projecta');
    }

    return (
        <div>
            <h1>The Projects of given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}