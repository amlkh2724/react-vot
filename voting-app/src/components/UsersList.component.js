import User from './User.component';

const UsersList = ({ users }) => {
  return (
    <section className='container'>
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </section>
  );
};

export default UsersList;