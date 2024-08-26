import styled from "styled-components";
import { useRef } from "react";
import { TiArrowUpThick } from "react-icons/ti";
// import { useWindowScroll } from "react-use";

interface ButtonProps {
  theme: {
    text: string;
    body: string;
    fontxl: string;
  };
}

interface Props {
  icon?: React.ReactElement;
  onClick?: () => void;
}

export function FloatButton({ icon, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  //   const { y } = useWindowScroll();

  const scrollTo = () => {
    let element = document.getElementById("Sales");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="relative">
      <Button
        className="bg-skin-primary/30 active:bg-skin-primary/30"
        ref={ref}
        onClick={onClick ? onClick : scrollTo}
        title="Inicio"
      >
        {icon ? (
          <>{icon}</>
        ) : (
          <>
            <TiArrowUpThick className="text-skin-primary text-2xl font-semibold" />
          </>
        )}
      </Button>
      
    </div>
  );
}

const Button = styled.div<ButtonProps>`
  width: 3rem;
  height: 3rem;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 2rem;
  bottom: 5rem;
  z-index: 999999;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;
