import { useRouter } from 'next/router';

export default function BlogPage() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>The Blog page</h1>
        </div>
    );
}