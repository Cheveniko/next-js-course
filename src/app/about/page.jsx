"use client";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Acerca de nosotros",
// };

const AboutPage = () => {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, rem nisi.
        Laudantium dicta eius aut fuga cupiditate doloribus beatae dolorum enim
        perferendis nam quis a iure eaque quo numquam aspernatur, veniam cumque
        alias corporis deleniti provident. Magnam fugit et nam architecto amet
        quidem dolorum rem, impedit cupiditate autem repudiandae! Harum
        inventore itaque necessitatibus vel, reprehenderit voluptates. Dolor
        quidem officia ratione voluptas nostrum doloribus, magni blanditiis
        facere velit, dignissimos debitis, quam tenetur voluptates consequatur
        nobis corporis est aut asperiores soluta totam recusandae? Impedit
        libero sed corporis quaerat ducimus provident quam reprehenderit minus
        necessitatibus? Aliquam delectus, vero quae reiciendis tempore deleniti
        odio.
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("Executing code");
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
};

export default AboutPage;
