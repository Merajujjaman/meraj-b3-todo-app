import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const TodoFilter = ({priority, setPriority}) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by Importance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value=""> All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="High"> High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
