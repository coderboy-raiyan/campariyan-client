import { Rating } from "@smastrom/react-rating";

function ProductDetails() {
  return (
    <div>
      {/* left side */}
      <div>
        <img
          src="https://contents.mediadecathlon.com/p1739649/k$864f38ea1fd6a05508cbd62c72dfd0e3/picture.jpg?format=auto&f=640x0"
          alt=""
        />
      </div>

      {/* details side*/}

      <div>
        <h4>Quencho</h4>
        <h3>Inflatable Camping Bed Base - Camp Bed Air 70 cm - 1 Person</h3>
        <Rating value={1} readOnly items={1} />
        <p>
          A 70 cm inflatable bed base! It can be combined with another one to
          make a double bed, with a five-year warranty. Be aware, the mattress
          is not included.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
