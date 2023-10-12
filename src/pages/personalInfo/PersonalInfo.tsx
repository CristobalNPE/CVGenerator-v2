import Stepper from "@/components/Stepper/Stepper";
import { Heading } from "@/components/typography/Heading";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function PersonalInfo() {
  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />
      <Heading variant={"h2"}>Completa tu información personal</Heading>

      <div className="grow">
       
      </div>

      <Link
        className={`mt-5 ${buttonVariants({
          variant: "default",
        })} w-full md:w-fit md:text-md md:py-6 md:px-12`}
        to={"/"}
      >
        {" "}
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Link>
    </main>
  );
}

export default PersonalInfo;
