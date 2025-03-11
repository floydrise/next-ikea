import Link from "next/link";

export const NavBottomMenu = () => {
  return (
      <div className={"hidden md:block pb-2 border-b"}>
          <nav className={"flex gap-8"}>
              <Link
                  href={"#"}
                  className={"font-bold text-base hover:underline decoration-0"}
              >
                  Продукти
              </Link>
              <Link
                  href={"#"}
                  className={"font-bold text-base hover:underline decoration-0"}
              >
                  Стаи
              </Link>
              <Link
                  href={"#"}
                  className={"font-bold text-base hover:underline decoration-0"}
              >
                  Вдъхновение
              </Link>
          </nav>
      </div>
  );
};
