import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
                setUsers(response.data);
                setLoading(false);

            });
    }, []);

    useEffect(() => {
        console.log(users)
    }, [users])
    return (
        <>
            <h1>Users</h1>
            {loading ? <Spinner /> :
            <UserList users={users} />} 
            {/* lading이 true이면 spinner가 나오고 false이면 Userlist를 보여줌 */}
        </>
        
    );
};


export default Users;