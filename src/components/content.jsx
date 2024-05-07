import { getImageUrl } from "../ultils/image";

export default function Content({people}) {
    return people.length ? people.map(person => {
        return (<div>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>This is <strong>{person.name}</strong>: {person.profession}</p>
        </div>)
    }) : null;
}