import Image from "next/image";
import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const Plato = ({ platos }) => {
  const { image, title, id } = platos;

  return (
    <div className="col-sm-3 mb-3">
      <div className="card max-width">
        <div className="card-img-top">
          <Image
            src={image}
            alt={title}
            className="card-img-top"
            layout="responsive"
            width={75}
            height={75}
          />
        </div>

        <div className="card-body text-center">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{title}</Tooltip>}
          >
            <h5 className="card-title text-truncate">{title}</h5>
          </OverlayTrigger>
          <hr />
          <Link
            href={{
              pathname: "/recipe",
              query: { id: id },
            }}
            passHref
          >
            <button type="button" className="btn btn-outline-info">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plato;
