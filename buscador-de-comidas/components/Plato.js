import Image from "next/image";
import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const Plato = ({ platos }) => {
  const { image, title } = platos;

  return (
    <div className="col mt-2">
      <div className="card text-center" style={{ width: "20rem" }}>
        <Image
          src={image}
          alt={title}
          className="card-img-top"
          layout="responsive"
          width={75}
          height={75}
        />
        <div className="card-body">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{title}</Tooltip>}
          >
            <h5 className="card-title text-truncate">{title}</h5>
          </OverlayTrigger>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Plato;
