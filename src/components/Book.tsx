import { useRef } from "react";
import { pages } from "./UI";
interface IPage {
  number: number;
  front: any;
  back: any;
}
export const Page: React.FC<IPage> = (props) => {
  const group = useRef(null);
  return (
    <group {...props} ref={group}>
      <mesh scale={0.1}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </group>
  );
};
export const Book = () => {
  return (
    <group>
      {[...pages].map((page, index) => (
        <Page {...page} key={index} number={index} position-x={index * 0.1} />
      ))}
    </group>
  );
};
