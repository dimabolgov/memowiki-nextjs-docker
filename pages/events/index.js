import Link from "next/link";

export default function EventsPage() {
    const clients = [
        { id: "max", name: "Maximilian" },
        { id: "manu", name: "Manuael" },
    ];

    return (
        <div>
            <h1>All Events</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link
                            href={{
                                pathname: "/clients/[id]",
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    );
}