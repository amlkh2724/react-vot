import User from './User.component';
import users from '../data/data';

const UsersList = ({ users }) => {
  return (
    <section className='container'>
      {users.map((user, index) => (
        <User key={index} id={user.id} name={user.name} description={user.description} votes={user.votes} />
      ))}
    </section>
  );
};

export default UsersList;