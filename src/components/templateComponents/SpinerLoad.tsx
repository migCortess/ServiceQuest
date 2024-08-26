import { Spinner } from "react-bootstrap";
import { useSpinLoadStore } from "../../store/useSpinLoadStore";

export const SpinerLoad = () => {
  const { SpinLoad } = useSpinLoadStore();
  return (
    <>
      {SpinLoad ? (
        <div id="SpinerLoad" className="SpinLoadPadre  z-[99999999999999999999] absolute">
          <div className="SpinLoadhijo">
            <Spinner
              className="SpinLoad-centered"
              style={{ width: "12rem", height: "12rem" }}
              animation="grow"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
