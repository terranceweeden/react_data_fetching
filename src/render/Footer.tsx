import useRenderTimes from "./UseRenderTimes";

export default function Footer() {
  const count = useRenderTimes();
  return (
    <footer>
      <p>Footer component has re-rendered {count} times</p>
    </footer>
  );
}
