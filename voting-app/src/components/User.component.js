
const User = ({ id, name, description, votes }) => {
  return (
    <article className='card'>
      {/* <img src={image} alt={`${name} ${lastName}`} /> */}
      <h4>{description} </h4>
      <h5>{votes}</h5>

    </article>
  );
};

export default User;