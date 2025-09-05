import { useEffect } from "react";

function WindowWidth() {
  useEffect(() => {
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <p>Resize the window and check console</p>;
}
export default WindowWidth;