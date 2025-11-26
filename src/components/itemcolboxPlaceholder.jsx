import { Placeholder } from "react-bootstrap";

const ItemcolboxPlaceholder = () => {
  return (
    <div className="col">
      <div
        className="card h-100 p-0"
        style={{ width: "14rem", height: "330px" }}
      >
        <Placeholder animation="glow">
          {/* Image area */}
          <div className="pt-2 pb-3 px-2">
            <Placeholder
              className="w-100 rounded"
              style={{ height: "150px" }}
            />
          </div>

          <div className="px-3 d-flex flex-column h-100">
            {/* Category */}
            <Placeholder className="mb-2" xs={4} />

            {/* Title (2 lines) */}
            <Placeholder className="mb-1" xs={8} />
            <Placeholder className="mb-2" xs={7} />

            {/* Spacer + Rating + Price */}
            <div className="mt-4">
              {/* Rating */}
              <Placeholder className="mb-2" xs={5} />

              {/* Price */}
              <Placeholder className="mb-2" xs={3} />
            </div>
          </div>
        </Placeholder>
      </div>
    </div>
  );
};
export default ItemcolboxPlaceholder;
