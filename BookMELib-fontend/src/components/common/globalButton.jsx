import { Button } from "@/components/ui/button";

const GlobalButton = ({ children, onClick }) => {
  return (
    <>
      {
        <Button
          variant="ghost"
          className="px-4 py-1 text-white  capitalize rounded transition"
          onClick={onClick}
        >
          {children}
        </Button>
      }
    </>
  );
};

export default GlobalButton;
