import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { Ban, Home } from "lucide-react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="grid place-items-center h-[100dvh] text-center p-2">
        <div className="flex flex-col gap-10">
          <Heading>
            Error{" "}
            <span className="font-thin">
              {error.status} - {error.statusText}
            </span>
          </Heading>
          <Heading variant={"h2"}>{error.data}</Heading>
          <div className="flex justify-center">
            <Ban className="w-[30%] h-[30%] text-destructive" />
          </div>
          <Button onClick={() => navigate("/")}>
            <Home className="mr-2" /> Volver al Inicio
          </Button>
        </div>
      </main>
    );
  }
}

export default ErrorPage;
