import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const FriendDetail = () => {
    
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const {name, email, phone, website, company} = friend;
 
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
       fetch(url)
       .then(res => res.json())
       .then(data => setFriend(data))
    }, [])
    return (
        <div>
             <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company Name: {company && company.name}</p>
        </div>
    );
};

export default FriendDetail;