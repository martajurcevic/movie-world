import '../item/Item.css'

const Item = ({ data }) => {
  const { Title, Poster } = data;
  return (
    <>
      <img src={Poster} />
      <span>{Title}</span>
    </>
  );
};
export default Item;



