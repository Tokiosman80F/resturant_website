const VertcalMenuCard = ({data}) => {
  return (
    <div>
      <div className="card w-full h-[541px] bg-base-300 rounded-none ">
        <figure>
          <img
            src={data.image}
            alt="Shoes"
            className="w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">
            {data.name}
            <div className="badge badge-warning">${data.price}</div>
          </h2>
          <p>{data.recipe}</p>
          <div className="card-actions justify-center">
            <button className="uppercase bg-black px-5 text-[#BB8506] py-2 border-[#BB8506] border-b-4 rounded-lg " >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VertcalMenuCard;
